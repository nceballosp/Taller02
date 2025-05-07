const express = require('express');
const router = express.Router();
const pokeneas = require('./util/pokeneas');


router.get('/', (req, res) => {
    const number = Math.floor(Math.random() * pokeneas.length);
    const { phrase, ...viewData } = pokeneas[number];
    res.render('index', { pokenea: viewData });
  })

router.get('/phrase', (req, res) => {
    const number = Math.floor(Math.random() * pokeneas.length);
    const viewData = pokeneas[number];
    res.render('phrase', { pokenea: viewData});
})
module.exports = router;
