import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { Auth } from "aws-amplify";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import { ApplicationConfig } from "../../../application.config";

export const retrieveLinks = (): ApolloLink => {
    const url = ApplicationConfig.aws.Api.graphqlEndpoint
    const region = ApplicationConfig.aws.Api.region;

    const httpLink = createHttpLink({
        uri: url
    });
    const auth = {
        type: ApplicationConfig.aws.Api.authType,
        jwtToken: async () => {
            const credentials = await Auth.currentSession();
            return credentials.getIdToken().getJwtToken();
        }
    }

    return ApolloLink.from([
        createAuthLink({ url, region, auth } as any),
        createSubscriptionHandshakeLink({ url, region, auth } as any, httpLink as any)
    ] as any);
}