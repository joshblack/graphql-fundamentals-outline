import {
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';
import { VideoType } from './video';
import { VideoInputType } from './videoInput';
import { createVideo } from '../../data';

export const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root Mutation type.',
  fields: {
    createVideo: {
      type: VideoType,
      args: {
        video: {
          type: new GraphQLNonNull(VideoInputType),
        },
      },
      resolve: (_, args) => {
        return createVideo(args.video);
      },
    },
  },
});
