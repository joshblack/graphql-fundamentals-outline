import {
  GraphQLInterfaceType,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import { InstructorType } from './instructor';
import { VideoType } from './video';

export const NodeInterface = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolveType: (object) => {
    console.log(value);
  },
});
