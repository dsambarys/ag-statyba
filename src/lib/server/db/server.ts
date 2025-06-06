import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';
import dotenv from 'dotenv';
import { typeDefs } from '../../../graphql/typeDefs';
import { resolvers } from '../../../graphql/resolvers';

dotenv.config();

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers(),
  });

  await server.start();

app.use(
  '/graphql',
  [
    cors({
      origin: 'http://localhost:5173', // adjust based on your Svelte dev server
      credentials: true,
    }),
    json(),
    expressMiddleware(server)
  ]
);


  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
}

startServer();
