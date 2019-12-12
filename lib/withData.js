import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { endpoint, prodEndPoint } from "../config";

//https://github.com/apollographql/apollo-client/issues/4193
function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : prodEndPoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers: { cookie: headers && headers.cookie }
      });
    },
    //local data
    clientState: {
      resolvers: {},
      defaults: {
        cartOpen: false
      }
    }
  });
}

export default withApollo(createClient);
