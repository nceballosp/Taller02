const express = require('express');
const router = express.Router();
const pokeneas = require('./util/pokeneas');
const os = require("os");


router.get('/', (req, res) => {
    const number = Math.floor(Math.random() * pokeneas.length);
    const { phrase, ...viewData } = pokeneas[number];
    viewData.containerId = os.hostname();
    res.render('index', { pokenea: viewData });
  })

router.get('/phrase', (req, res) => {
    const number = Math.floor(Math.random() * pokeneas.length);
    const viewData = pokeneas[number];
    viewData.containerId = os.hostname();
    res.render('phrase', { pokenea: viewData});
})
module.exports = router;
