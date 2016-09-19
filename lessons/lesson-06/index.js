import { graphql, buildSchema } from 'graphql';

/**
 * Here we are modifying the query, creating a named query, we can add
 * variables in the argument position of the query name.
 *
 * We'll add the variable, and add it's type definition.
 *
 * Then, we'll update our GraphQL to include the variable values and run the
 * query
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

const query = `
query getVideo($id: ID!){
  video(id: $id) {
    id,
    title,
    duration,
    watched
  }
}`;

// Add in Variable (show GraphQL signature)
graphql(schema, query, resolvers, null, { id: 'abc' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

