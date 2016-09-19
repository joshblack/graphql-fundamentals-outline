import {
  GraphQLSchema,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  graphql
} from 'graphql';

/**
 * Here we are modifying the query, creating a named query, we can add
 * variables in the argument position of the query name.
 *
 * We'll add the variable, and add it's type definition.
 *
 * Then, we'll update our GraphQL to include the variable values and run the
 * query
 */
const videoA = {
  id: 'abc',
  title: 'Create a GraphQL Schema',
  duration: 120,
  released: true,
};
const videoB = {
  id: 'def',
  title: 'Ember.js CLI',
  duration: 240,
  released: false,
};
const videos = [videoA, videoB];
const getVideoById = (id) => {
  const [video] = videos.filter((video) => {
    return video.id === id;
  });

  return video;
};

const VideoType = new GraphQLObjectType({
  name: 'VideoType',
  description: 'A video on Egghead.io',
  fields: {
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
  },
});

const Query = new GraphQLObjectType({
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
      resolve: () => videos,
    },
  },
});

const schema = new GraphQLSchema({
  query: Query
});

const query = `
{
  video(id: "abc") {
    id,
    title,
    duration,
    released
  }
}`;

// Add in Variable (show GraphQL signature)
graphql(schema, query)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

