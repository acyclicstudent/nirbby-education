import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ResourceNotFoundException } from '../domain/exceptions/resource-not-found.exception';

const dynamoDb = new DynamoDB.DocumentClient();

export const retriveSubjectCollaborators = async (params: any, ident: any) => {

    const subject = await dynamoDb.query({
        TableName: process.env.DB_SUBJECTS_COLLABORATORS,
        KeyConditionExpression: 'subjectId = :subjectId',
        ExpressionAttributeNames: {
            ':subjectId': params.subjectId
        }
    }).promise();

    if (!subject.Items) throw new ResourceNotFoundException('No hay colaboradores para esta materia');

    return subject.Items;
}