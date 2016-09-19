import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
type Query {
  foo: String
}

type Schema {
  query: Query
}
`);

const resolvers = {
  foo: () => 'bar',
};

const query = `{ foo }`;

graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

