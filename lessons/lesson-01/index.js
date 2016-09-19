import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
# Defines all the things that we can "start" with
# Describes what is possibly, and perhaps more importantly what's not possible
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

// Talk about GraphQL type
/**
 * graphql(
 *   schema: GraphQLSchema,
 *   requestString: string,
 *   rootValue?: ?any, passed as root value to the executor
 *   contextValue?: ?any,
 *   variableValues?: ?{[key: string]: any},
 *   operationName?: ?string
 * ): Promise<GraphQLResult>
 */
graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

