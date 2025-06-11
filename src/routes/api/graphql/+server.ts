import { json } from '@sveltejs/kit';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';
import { schema } from '$lib/resolvers';

// Create the executable schema
const executableSchema = makeExecutableSchema(schema);

export async function POST({ request }) {
    try {
        const { query, variables, operationName } = await request.json();

        // Execute the GraphQL query
        const result = await graphql({
            schema: executableSchema,
            source: query,
            variableValues: variables,
            operationName
        });

        // Handle GraphQL errors
        if (result.errors) {
            console.error('GraphQL errors:', result.errors);
            return json({
                errors: result.errors.map(error => ({
                    message: error.message,
                    path: error.path,
                    extensions: error.extensions
                }))
            }, { status: 400 });
        }

        return json(result);
    } catch (error) {
        console.error('GraphQL server error:', error);
        return json({ 
            errors: [{ 
                message: 'Internal server error',
                path: ['graphql']
            }]
        }, { status: 500 });
    }
}

// Add OPTIONS handler for CORS
export async function OPTIONS() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Max-Age': '86400'
        }
    });
} 