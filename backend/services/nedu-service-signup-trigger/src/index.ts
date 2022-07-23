import { PreSignUpTriggerEvent } from "aws-lambda/trigger/cognito-user-pool-trigger/pre-signup";
import DynamoDB from 'aws-sdk/clients/dynamodb';

const db = new DynamoDB.DocumentClient();

export const handler = async (event: PreSignUpTriggerEvent) => {
    const username = event.userName;
    const email = event.request.userAttributes.email;
    console.log(`[ServiceContentIngestion]: Registering user ${username} with email ${email}`);
    
    // Check if username is already registered.
    if (await usernameExists(username)) {
        console.log(`[handler]: Username ${username} already registered`);
        throw new Error('UsernameExistsException');
    }

    // Check if email is not registered
    if (await emailExists(email)) {
        console.log(`[handler]: Email ${email} already registered`);
        throw new Error('UserEmailExists');
    }

    await registerUser({
        username,
        email,
        subscriptionType: 'none',
        subscriptionTime: 0,
        subscriptionEnd: 0
    });

    console.log(`[ServiceContentIngestion]: User registered ${username} with email ${email}`);

    // Workaround for verification.
    event.response.autoVerifyEmail = true;
    event.response.autoConfirmUser = true;

    return event;
}

interface User {
    username: string;
    email: string;
    subscriptionType: string;
    subscriptionTime: number;
    subscriptionEnd: number;
}

const registerUser = async (user: User) => {
    try {
        await db.put({
            TableName: process.env.USERS_TABLE,
            Item: user
        }).promise();
    } catch (err) {
        console.log(`[registerUser][Error][${user.email}]: ${err.message}`);
        throw err;
    }
}

const emailExists = async (email: string) => {
    try {
        const result = await db.query({
            TableName: process.env.USERS_TABLE,
            IndexName: 'email-index',
            KeyConditionExpression: 'email = :email',
            ExpressionAttributeValues: {
                ':email': email
            }
        }).promise();
        console.log(`[emailExists][${email}]: ${result.Items.length}`);
    
        return !!result.Items?.length;
    } catch (err) {
        console.log(`[emailExists][Error][${email}]: ${err.message}`);
        throw err;
    }
}


const usernameExists = async (username: string) => {
    try {
        const result = await db.get({
            TableName: process.env.USERS_TABLE,
            Key: {
                username
            }
        }).promise();
        console.log(`[usernameExists][${username}]: ${result.Item}`);
    
        return !!result.Item?.username;
    } catch (err) {
        console.log(`[usernameExists][Error][${username}]: ${err.message}`);
        throw err;
    }
}