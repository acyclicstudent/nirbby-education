export const ApplicationConfig: IApplicationConfig = {
    aws: {
        Auth: {
            userPoolId: 'us-west-2_Tjj9WqrmP',
            region: 'us-west-2',
            userPoolWebClientId: '3vvvqs10vidqndqkdkdg5hvh11'
        },
        Api: {
            region: 'us-west-2',
            graphqlEndpoint: 'https://yatzpgsrirexjolyu2iwjuc6yu.appsync-api.us-west-2.amazonaws.com/graphql',
            authType: 'AMAZON_COGNITO_USER_POOLS'
        }
    },
} as any;

export interface IApplicationConfig {
    aws: {
        Auth: {
            userPoolId: string;
            region: string;
            userPoolWebClientId: string;
        },
        Api: {
            region: string;
            graphqlEndpoint: string;
            authType: string;
        }
    },
}