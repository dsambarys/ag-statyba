import { paymentResolvers, paymentTypes } from './paymentResolver';
import { mergeResolvers } from '@graphql-tools/merge';
import { mergeTypeDefs } from '@graphql-tools/merge';

// Combine all resolvers
export const resolvers = mergeResolvers([
    paymentResolvers,
    // Add other resolvers here
]);

// Combine all type definitions
export const typeDefs = mergeTypeDefs([
    paymentTypes,
    // Add other type definitions here
]);

// Base schema types
const baseTypes = `
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }

    type Subscription {
        _empty: String
    }
`;

// Export the complete schema
export const schema = {
    typeDefs: [baseTypes, typeDefs],
    resolvers
};

// Export individual resolvers for direct use
export { paymentResolvers }; 