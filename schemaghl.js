import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    Users: [User]
    user(_id: ID!): User
    quotes: [Quote]
    iquote(by: ID!): [Quote]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }

  type Quote {
    name: String
    by: ID
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Mutation {
    SignUp(newUser: UserInput!): User
  }
`;

export default typeDefs;
