import { retrieveStudents } from "./resolvers/retrieve-students.resolver";
import { registerStudents } from "./resolvers/register-students.resolver";

export const handler = async (event: any) => {
    return (operations as any)[event.info.parentTypeName][event.info.fieldName](
        event.arguments,
        event.identity
    );
}

const operations = {
    Mutation: {
        registerStudents
    },
    Query: {
        retrieveStudents
    }
}