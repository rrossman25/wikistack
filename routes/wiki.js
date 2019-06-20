const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

router.get('/', (req, res, next) => {
  res.send('getting wiki with it');
});

router.post('/', (req, res, next) => {
  res.send('posting wiki with it');
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
