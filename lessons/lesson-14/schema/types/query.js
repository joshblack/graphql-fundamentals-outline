import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql';
import { VideoType } from './video';
import { InstructorType } from './instructor';
import { nodeField } from './node';
import { getVideos, getVideoById, getInstructorById } from '../../data';

export const Query = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    node: nodeField,
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
    instructor: {
      type: InstructorType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the instructor.',
        },
      },
      resolve: (_, args) => {
        return getInstructorById(args.id);
      },
    },
    videos: {
      type: new GraphQLList(VideoType),
      description: 'Get all the videos in the collection.',
      resolve: () => getVideos(),
    },
  },
});

