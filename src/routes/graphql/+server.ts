import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import { createSchema, createYoga } from 'graphql-yoga';
import { resolvers } from '$lib/graphql/resolvers';
import { readFileSync } from 'fs';
import { join } from 'path';
import { db } from '$lib/db';

// Read the schema file
const schemaPath = join(process.cwd(), 'src', 'lib', 'graphql', 'schema.graphql');
const typeDefs = readFileSync(schemaPath, 'utf-8');

// Create the schema
const schema = createSchema({
    typeDefs,
    resolvers
});

// Create yoga instance
const yoga = createYoga<RequestEvent>({
    schema,
    graphqlEndpoint: '/graphql',
    context: async ({ request }) => {
        // Get the token from the Authorization header
        const token = request.headers.get('authorization')?.replace('Bearer ', '') || '';
        
        return {
            db,
            token
        };
    }
});

export const GET = yoga;
export const POST = yoga;
export const OPTIONS = yoga; 