import { retriveSubjectCategories } from './resolvers/retrieveSubjectCategories.resolver';
export const handler = async (event: any) => {
    return (operations as any)[event.info.parentTypeName][event.info.fieldName](
        event.arguments,
        event.identity
    );
}

const operations = {
    Mutation: {
    },
    Query: {
        retriveSubjectCategories
    }
}