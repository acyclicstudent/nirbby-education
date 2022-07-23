import { retrieveSubjectCollaborators } from "./resolvers/retrieve-subject-collaborators.resolver";
import { retrieveSubjects } from "./resolvers/retrieve-subjects.resolver";
import { retrieveSubject } from "./resolvers/retrieve-subject.resolver";

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
        retrieveSubjectCollaborators,
        retrieveSubjects,
        retrieveSubject
    }
}