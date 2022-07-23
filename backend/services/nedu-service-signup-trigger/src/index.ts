import { PreSignUpTriggerEvent } from "aws-lambda/trigger/cognito-user-pool-trigger/pre-signup";
import DynamoDB from 'aws-sdk/clients/dynamodb';
import { randomUUID } from "crypto";

const db = new DynamoDB.DocumentClient();

export const handler = async (event: PreSignUpTriggerEvent) => {
    const id  = randomUUID();
    const name = event.request.userAttributes.name;
    const email = event.request.userAttributes.email;

    if (await emailExists(email)) throw new Error('UserEmailExists');
    
    await registerUser({
        id,
        name,
        email: 'none',
        institution: 'none',
        xp: 0
    });

    // Workaround for verification.
    event.response.autoVerifyEmail = true;
    event.response.autoConfirmUser = true;

    return event;
}

interface User {
    id: string;
    name: string;
    email: string;
    institution: string;
    xp: number;
}

const registerUser = async (user: User) => {
    try {
        await db.put({
            TableName: process.env.USERS_TABLE,
            Item: user
        }).promise();
    } catch (err) {
        throw err;
    }
}

const emailExists = async (email: string) => {

    try {
        const result = await db.query({
            TableName: process.env.USERS_TABLE,
            IndexName: 'gsi-email',
            KeyConditionExpression: 'email = :email',
            ExpressionAttributeValues: {
                ':email': email
            }
        }).promise();

        return !!result.Items?.length;
    } catch (err) {throw err;}
    
}