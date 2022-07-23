import DynamoDB from "aws-sdk/clients/dynamodb";
import { ResourceNotFoundException } from "../domain/exceptions/resource-not-found.exception";

const db = new DynamoDB.DocumentClient();

export const retrieveCoach = async (args, identity) => {
    const resultCoach = await db.get({
        TableName: process.env.COACHES_TABLE,
        Key: {
            id: args.id
        }
    }).promise();

    if (!resultCoach) throw new ResourceNotFoundException('No se encontro al coach.');

    return resultCoach.Item
}