import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { VideoType } from './video';

export const InstructorType = new GraphQLObjectType({
  name: 'Instructor',
  description: 'An instructor at Egghead.io.',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The ID of the instructor.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name for the instructor.',
    },
    videos: {
      type: new GraphQLList(VideoType),
      description: 'The videos made by the instructor.',
    },
  }),
});
