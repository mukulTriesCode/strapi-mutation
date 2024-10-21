import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphqlClient = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
  // headers: {
  //   Authorization: `Bearer e277fd7f069500af0d464d19c894433bfcf31cfa1a821938187e672769da7c3597dd39caba1f5f9950d4bde3942f553b77eb645e22ec216db741dd720630a5943221186e67f18da37c35fbe034f4b19a1d894b6821ea477d98d64a16f474a49758458871833dbafd8d60b14cb4cae0a52c9c2ac6391572037f0de06466cb9cf0`,
  // },
});

export default graphqlClient;
