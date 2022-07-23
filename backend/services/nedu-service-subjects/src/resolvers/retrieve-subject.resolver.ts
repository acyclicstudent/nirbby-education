import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ResourceNotFoundException } from '../domain/exceptions/resource-not-found.exception';

const db = new DynamoDB.DocumentClient();

export const retrieveSubject =async (args, identity) => {
    const adoptionResult = await db.get({
        TableName: process.env.SUBJECTS_TABLE,
        Key: {
            id: args.id
        }
    }).promise();

    if(!adoptionResult) throw new ResourceNotFoundException("No se encontró la materia.");

    return adoptionResult.Item
}