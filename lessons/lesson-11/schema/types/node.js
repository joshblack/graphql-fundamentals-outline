import {
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

export const NodeInterface = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
});
