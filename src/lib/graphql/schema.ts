export const typeDefs = `#graphql
  type Contact {
    id: ID!
    name: String!
    email: String!
    phone: String
    subject: String!
    message: String!
    createdAt: String!
    updatedAt: String!
  }

  input CreateContactInput {
    name: String!
    email: String!
    phone: String
    subject: String!
    message: String!
  }

  type ContactResponse {
    success: Boolean!
    message: String
    contact: Contact
  }

  type Query {
    contacts: [Contact!]!
    contact(id: ID!): Contact
  }

  type Mutation {
    createContact(input: CreateContactInput!): ContactResponse!
  }
`; 