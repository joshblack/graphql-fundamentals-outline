import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';
import { VideoType } from './video';
import { createVideo } from '../../data';

export const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root Mutation type.',
  fields: {
    createVideo: {
      type: VideoType,
      args: {
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
      },
      resolve: (_, args) => {
        return createVideo(args);
      },
    },
  },
});
