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
const instructors = [
  {
    id: '1',
    name: 'Josh Black',
    videos: ['abc'],
  },
  {
    id: '2',
    name: 'Iheanyi Ekechukwu',
    videos: ['def'],
  }
];

export const getVideos = () => videos;

export const getVideoById = (id) => {
  const [video] = videos.filter((video) => {
    return video.id === id;
  });

  return video;
};

export const getInstructorById = (id) => {
  const [instructor] = instructors.filter((instructor) => {
    return instructor.id === id;
  });

  return {
    ...instructor,
    videos: instructor.videos.map(getVideoById),
  };
};

const createID = (string) => (new Buffer(string, 'utf8')).toString('base64');
export const createVideo = ({
  title,
  duration,
  released,
}) => {
  const newVideo = {
    id: createID(title),
    title,
    duration,
    released,
  };

  videos.push(newVideo);

  return newVideo;
};
