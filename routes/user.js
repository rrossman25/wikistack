const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('all users');
});

router.get('/:id', (req, res, next) => {
  res.send(req.params.id);
});

router.post('/', (req, res, next) => {
  res.send('something');
});

router.put('/:id', (req, res, next) => {
  res.send(req.params.id);
});

router.delete('/:id', (req, res, next) => {
  res.send(req.params.id);
});

module.exports = router;
