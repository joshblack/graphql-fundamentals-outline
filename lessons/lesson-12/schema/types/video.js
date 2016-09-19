import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import { NodeInterface } from './node';

export const VideoType = new GraphQLObjectType({
  name: 'Video',
  description: 'A video on Egghead.io',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The ID of the Video.',
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The title of the Video.',
    },
    duration: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The duration of the Video (in seconds).',
    },
    released: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Whether or not the Video is released.',
    },
  }),
  interfaces: [NodeInterface],
});

