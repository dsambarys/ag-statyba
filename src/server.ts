// src/server.ts
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './lib/graphql/schema';
import { resolvers } from './lib/graphql/resolvers';
import { config } from './lib/config';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

const bootstrap = async () => {
  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start Apollo Server
  await server.start();

  // Apply middleware
  app.use(cors());
  app.use(express.json());
  
  // Apply Apollo middleware
  app.use('/graphql', expressMiddleware(server));

  // Start server
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
  });
};

bootstrap().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
