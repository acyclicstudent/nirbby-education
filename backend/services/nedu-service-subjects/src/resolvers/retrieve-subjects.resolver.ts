import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ResourceNotFoundException } from '../domain/exceptions/resource-not-found.exception';
import { Subjects } from '../domain/enums/subject.enum';

const db = new DynamoDB.DocumentClient();

const INDEXES = {
    DATE: Subjects.date,
    CATEGORY: Subjects.category,
    INSTITUTION: Subjects.institution,
}

const ATTRIBUTES = {
    DATE: 'year',
    CATEGORY: 'category',
    INSTITUTION: 'institution',
}

const EXPRESSIONS = {
    DATE: '#scope = :scope',
    CATEGORY: '#scope = :scope',
    INSTITUTION: '#scope = :scope',
}

export const retrieveSubjects = async (args: any, identity: any) => {
    const subjectResults = await db.query({
        TableName: process.env.SUBJECTS_TABLE,
        KeyConditionExpression: EXPRESSIONS[args.type],
        ExpressionAttributeNames: {
            '#scope': ATTRIBUTES[args.type]
        },
        ExpressionAttributeValues: {
            ':scope': args.type === 'DATE' ? Number(args.scope) : args.type 
        },
        IndexName: INDEXES[args.type]
    }).promise();
    if (!subjectResults) throw new ResourceNotFoundException('No se encontró la solicitud')

    return subjectResults.Items
}




