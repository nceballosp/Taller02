const express = require('express');
const router = express.Router();
const pokeneas = require('./pokeneas');

router.get('/', (req, res) => {
    const number = Math.floor(Math.random() * pokeneas.length);
    const { phrase, ...noPhrase } = pokeneas[number];
    res.send(noPhrase);
  })

router.get('/phrase', (req, res) => {
    const number = Math.floor(Math.random() * pokeneas.length);
    const phrase = pokeneas[number].phrase;
    res.send(phrase);
})
module.exports = router;
