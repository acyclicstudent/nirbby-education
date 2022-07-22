import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ResourceNotFoundException } from '../domain/exceptions/resource-not-found.exception';

const db = new DynamoDB.DocumentClient();

export const retrieveSubjects =async (args, identity) => {
    const subjectResults = await db.query({
        TableName: process.env.SUBJECTS_TABLE,
        KeyConditionExpression: "id", 
        ExpressionAttributeNames: {

        },
        IndexName: "Subject"
        

    }).promise();
    if (!subjectResults) throw new ResourceNotFoundException('No se encontró la solicitud')

    return subjectResults.Items
}




