import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './schema';

const server = express();

server.use(graphqlHTTP({
  schema,
  graphiql: true,
}));

server.listen(3000, (error) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log('Listening at http://localhost:3000');
});

