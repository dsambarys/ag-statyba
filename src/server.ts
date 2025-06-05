// src/server.ts
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers(db), // pass DB to resolvers
});

await server.start();

app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server)
);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000/graphql`)
);
