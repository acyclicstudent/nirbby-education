import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ResourceNotFoundException } from '../domain/exceptions/resource-not-found.exception';

const db = new DynamoDB.DocumentClient();

export const retrieveSubjects =async (args: any, identity: any) => {
    const subjectResults = await db.query({
        TableName: process.env.SUBJECTS_TABLE,
        KeyConditionExpression: "id =: id", 
        ExpressionAttributeNames: {
            'id': args.SubjectId
        },
        IndexName: "id"

    }).promise();
    if (!subjectResults) throw new ResourceNotFoundException('No se encontró la solicitud')

    return subjectResults.Items
}




