import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ResourceNotFoundException } from '../domain/exceptions/resource-not-found.exception';  
import { Catalogs } from '../domain/enums/catalogs.enum';

const dynamoDb = new DynamoDB.DocumentClient();

export const retriveCatalog =async (params:any, ident: any) => {

    const subjects = await dynamoDb.query({

        TableName: process.env.DB_CATALOGS,
        KeyConditionExpression: 'catalog = :catalog',
        ExpressionAttributeNames: {
            'catalog': Catalogs.subjects
        }
        
    }).promise();

    if (!subjects.Items) throw new ResourceNotFoundException('No hay materias para este catalogo');

    return subjects.Items;
}