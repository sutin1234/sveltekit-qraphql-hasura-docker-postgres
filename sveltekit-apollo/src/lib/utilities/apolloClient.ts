import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";
const GRAPHQL_ENDPOINT: string = import.meta.env.VITE_APP_GRAPHQL_ENDPOINT.toString();

export const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache()
});