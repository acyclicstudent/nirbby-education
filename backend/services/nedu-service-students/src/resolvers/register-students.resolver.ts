import DynamoDB from 'aws-sdk/clients/dynamodb';
import CognitoIdentityServiceProvider from 'aws-sdk/clients/cognitoidentityserviceprovider';
import { randomUUID } from 'crypto';

const dynamoDb = new DynamoDB.DocumentClient();

const cognito = new CognitoIdentityServiceProvider();

export const registerStudents = async ({...args}, identity) => {
    
    const student:any = {
        ...args,
        id: randomUUID()
    }

    await cognito.adminCreateUser({
        UserPoolId: process.env.USER_POOL_ID,
        Username: student.id,
        UserAttributes: [
            {
                Name: 'parent',
                Value: student.parent
            },
            {
                Name: 'institution',
                Value: student.institution
            },
            {
                Name: 'name',
                Value: student.name
            },
            {
                Name: 'email',
                Value: student.email
            }
        ],
        TemporaryPassword: student.password
    }).promise();

    await dynamoDb.put({
        TableName: process.env.STUDENTS_TABLE,
        Item: student
    }).promise();
    
    return student;
}