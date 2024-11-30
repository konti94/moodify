const { fetchMusic, fetchQuote } = require('../services/service');

const getMusicWithQuote = async (req, res) => {
  const { mood } = req.query;

  console.log('Mood:', mood);

  if (!mood) {
    return res.status(400).json({ error: 'Mood is required' });
  }

  try {
    const [music, quote] = await Promise.all([
      getMusic(mood),
      getQuote(mood),
    ]);

    res.json({ music, quote });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get music and quote data: ' + error.message });
  }
};

const getMusic = async (mood) => {
  if (!mood) {
    return res.status(400).json({ error: 'Mood is required' });
  }

  const music = await fetchMusic(mood);
  return music;
};

const getQuote = async (mood) => {
  if (!mood) {
    return res.status(400).json({ error: 'Mood is required' });
  }

  const quote = await fetchQuote(mood);
  return quote;
};

module.exports = { getMusicWithQuote };
