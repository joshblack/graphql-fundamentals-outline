import { GraphQLSchema } from 'graphql';
import { Query } from './types/query';
import { Mutation } from './types/mutation';

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
