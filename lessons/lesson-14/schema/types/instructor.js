import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { globalIdField } from 'graphql-relay';
import { nodeInterface } from './node';
import { VideoType } from './video';

export const InstructorType = new GraphQLObjectType({
  name: 'Instructor',
  description: 'An instructor at Egghead.io.',
  fields: () => ({
    id: globalIdField(),
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name for the instructor.',
    },
    videos: {
      type: new GraphQLList(VideoType),
      description: 'The videos made by the instructor.',
    },
  }),
  interfaces: () => [nodeInterface],
});
