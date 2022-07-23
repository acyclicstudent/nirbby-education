import DynamoDB from "aws-sdk/clients/dynamodb";
import { ResourceNotFoundException } from "../domain/exceptions/resource-not-found.exception";

const db = new DynamoDB.DocumentClient();

export const retrieveStudent = async (args, identity) => {
    const resultStudent = await db.get({
        TableName: process.env.STUDENTS_TABLE,
        Key: {
            id: args.id
        }
    }).promise();

    if (!resultStudent) throw new ResourceNotFoundException('No se encontro al estudiante.');

    return resultStudent.Item
}