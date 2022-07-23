import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { retrieveLinks } from './controllers/links.controller';

export const client = new ApolloClient({
    link: retrieveLinks(),
    cache: new InMemoryCache()
});