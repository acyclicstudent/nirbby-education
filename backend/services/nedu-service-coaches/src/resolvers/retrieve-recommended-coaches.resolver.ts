import { ResourceNotFoundException } from '../domain/exceptions/resource-not-found.exception';
import DynamoDB from 'aws-sdk/clients/dynamodb';

const db = new DynamoDB.DocumentClient();

const retrieveRecommendedCoaches = async (args, identity) => {
    const coachesResult = await db.query({
        TableName: process.env.CERTIFICATIONS_TABLE,
        KeyConditionExpression: "certificationId = :id",
        ExpressionAttributeValues: {
            ':id' : args.id
        },
        IndexName: "gsi-xp"
    }).promise();
    
    if (!coachesResult) throw new ResourceNotFoundException('No se encontraron coaches');

    return coachesResult.Items
}