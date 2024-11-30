const axios = require('axios');
require('dotenv').config({ path: require('path').join(__dirname, '../../../.env') });

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_BASE_URL = process.env.YOUTUBE_SEARCH_BASE_URL;
const QUOTES_BASE_URL = process.env.QUOTES_BASE_URL;

const fetchMusic = async (mood) => {
  try {
    const serialNumber = Math.floor(Math.random() * (19 - 0) + 0);

    const response = await axios.get(YOUTUBE_BASE_URL, {
      params: {
        part: 'snippet',
        q: `${mood} music`,
        type: 'video',
        videoCategoryId: 10,
        videoDuration: 'medium',
        maxResults: 20,
        key: YOUTUBE_API_KEY,
      },
    });

    const item = response.data.items[serialNumber];

    return {
      title: item.snippet.title,
      description: item.snippet.description,
      videoId: item.id.videoId,
      thumbnail: item.snippet.thumbnails.default.url,
    };
  } catch (error) {
    throw new Error('Error fetching music video: ' + error.message);
  }
};

const fetchQuote = async (mood) => {
  try {
    const tag = tagChoose(mood);
    const response = await axios.get(`${QUOTES_BASE_URL}?tags=${tag}`);

    return {
      content: response.data[0].content,
      author: response.data[0].author,
    };
  } catch (error) {
    throw new Error('Error fetching quote: ' + error.message);
  }
};

const tagChoose = (mood) => {
  switch (mood) {
    case 'happy':
      return 'happiness';
    case 'sad':
      return 'change';
    case 'angry':
      return 'life';
    case 'excited':
      return 'future';
    case 'chill':
      return 'film';
    case 'energetic':
      return 'competition';
    case 'romantic':
      return 'love';
    case 'motivational':
      return 'motivational';
    case 'humorous':
      return 'humorous';
    case 'lonely':
      return 'friends' ;
    case 'thoughtful':
      return 'inspirational';
    case 'philosophical':
      return 'philosophy';
    case 'sleepy':
      return 'success';
  }
}

module.exports = { fetchMusic, fetchQuote };
