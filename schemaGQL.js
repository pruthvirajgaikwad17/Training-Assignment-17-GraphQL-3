import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greet: String
    bags: [Bag]
    singleBag(id: ID!): Bag
  }

  type Bag {
    id: ID!
    title: String
    price: Float
    description: String
    category: String
  }
`;

export default typeDefs;
