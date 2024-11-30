const express = require('express');
const { getMusicWithQuote } = require('../controllers/controller');

const router = express.Router();

router.get('/music-with-quote', getMusicWithQuote);

module.exports = router;
