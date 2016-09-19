import {
  nodeDefinitions,
  fromGlobalId,
} from 'graphql-relay';

import { InstructorType } from './instructor';
import { VideoType } from './video';
import { getObjectById } from '../../data';

export const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    return getObjectById(type, id);
  },
  (object) => {
    if (object.title) {
      return VideoType;
    } else if (object.name) {
      return InstructorType;
    }

    return null;
  }
);
