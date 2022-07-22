import { retriveSubjectCollaborators } from "./resolvers/retriveSubjectCollaborators.resolver";
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
        retriveSubjectCollaborators
    }
}