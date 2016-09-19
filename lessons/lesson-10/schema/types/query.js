import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql';
import { VideoType } from './video';
import { getVideoById } from '../../data';
import { getVideos } from '../../data';

export const Query = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    video: {
      type: VideoType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the video.',
        },
      },
      resolve: (_, args) => {
        return getVideoById(args.id);
      },
    },
    videos: {
      type: new GraphQLList(VideoType),
      description: 'Get all the videos in the collection.',
      resolve: () => getVideos(),
    },
  },
});

