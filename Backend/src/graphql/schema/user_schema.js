const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
  }

  type Query {
    user(id: ID!): User
    users: [User!]!
    filterUserByName(name: String!): [User!]!
    filterUserByEmail(email: String!): [User!]!
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
    deleteUser(id: String!): User!
  }
`;

module.exports = typeDefs