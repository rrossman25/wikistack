const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require('../models');
const wikipage = require('../views/wikipage');

router.get('/', (req, res, next) => {
  res.send('getting wiki with it');
});

router.post('/', async (req, res, next) => {

  const page = await new Page({
    title: req.body.title,
    content: req.body.content,
  });
  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) { next(error) }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    const wikified = wikipage(page);
    res.send(wikified);
  } catch (error) { next(error) }
});

module.exports = router;
