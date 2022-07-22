import { Students } from './../domain/enums/students.enum';
import { ResourceNotFoundException } from './../domain/exceptions/resource-not-found.exception';
import DynamoDB from 'aws-sdk/clients/dynamodb';

const db = new DynamoDB.DocumentClient();

export const retrieveStudents =         async (args, identity) => {
    const studentsResult = await db.query({
        TableName: process.env.STUDENTS_TABLE,
        KeyConditionExpression: "id = :id",
        ExpressionAttributeNames: {
            'id': Students.id
        },
        IndexName: "student"
    }).promise();
    if(!studentsResult) throw new ResourceNotFoundException('No se encontró la solicitud.')

    return studentsResult.Items;
}