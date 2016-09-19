import { graphql, buildSchema } from 'graphql';

/**
 * Basically we update the user field to include a lookup for id, can mention
 * that these could really be any primitive. More complex types are represented
 * by a specific GraphQL type called an InputObjectType.
 *
 * Once we update that, say we're going to refactor our data a bit to create a
 * mockDatabase and to create a `getUser` function which takes in an id.
 *
 * Our rootValue also updates, now the first parameter is the arguments that
 * are passed into the query.
 *
 * Update the query to lookup someone with a static id
 */
const schema = buildSchema(`
type Video {
  id: ID,
  title: String!,
  duration: Int,
  watched: Boolean
}

type Query {
  video(id: ID!): Video
  videos: [Video]
}

type Schema {
  query: Query
}
`);

const videoA = {
  id: 'abc',
  title: 'Create a GraphQL Schema',
  duration: 120,
  watched: true,
};
const videoB = {
  id: 'def',
  title: 'Ember.js CLI',
  duration: 240,
  watched: false,
};
const videos = [videoA, videoB];
const getVideoById = (id) => {
  const [video] = videos.filter((video) => {
    return video.id === id;
  });

  return video;
};

const resolvers = {
  video: (args) => {
    const { id } = args;

    return getVideoById(id);
  },
  videos: () => videos,
};

const query = `{
  video(id: "abc") {
    id,
    title,
    duration,
    watched
  }
}`;

graphql(schema, query, resolvers)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

