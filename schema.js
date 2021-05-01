const { gql } = require("apollo-server");

const typeDefs = gql`
  type Notes {
    title: String
    description: String
  }

  type postNotes {
    status: Boolean
    message: String
  }

  type Query {
    getNotes: [Notes]
  }

  type Mutation {
    postNotes(title: String!, description: String!): postNotes
  }
`;

module.exports = typeDefs;
