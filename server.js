import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./schemaGQL.js";
import resolvers from "./resolvers.js";
import { getProductData } from "./fetchData.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  dataSources: () => {
    return {
      allBagsDataAPI: new getProductData(),
      singleBagAPI: new getProductData(),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is Ready ${url}`);
});
