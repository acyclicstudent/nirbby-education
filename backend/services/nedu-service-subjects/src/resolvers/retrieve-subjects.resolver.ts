import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ResourceNotFoundException } from '../domain/exceptions/resource-not-found.exception';
import { Subjects } from '../domain/enums/subject.enum';

const db = new DynamoDB.DocumentClient();

const INDEXES = {
    DATE: Subjects.date,
    CATEGORY: Subjects.category,
    INSTITUTION: Subjects.institution,
}

const EXPRESSIONS = {
    DATE: 'year = :scope',
    CATEGORY: 'category = :scope',
    INSTITUTION: 'institution = :scope',
}

export const retrieveSubjects = async (args: any, identity: any) => {
    const subjectResults = await db.query({
        TableName: process.env.SUBJECTS_TABLE,
        KeyConditionExpression: EXPRESSIONS[args.type], 
        ExpressionAttributeValues: {
            ':scope': args.scope 
        },
        IndexName: INDEXES[args.type]

    }).promise();
    if (!subjectResults) throw new ResourceNotFoundException('No se encontró la solicitud')

    return subjectResults.Items
}




