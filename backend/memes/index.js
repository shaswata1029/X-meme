const express = require('express');
const router = express.Router();
const memeController = require('../controllers/memecontroller');


router.post('/', memeController.postMeme);
// api call to post the meme.

router.get('/', memeController.findMemes);
// api call to get the latest 100 memes.

router.get('/:id', memeController.findUniqueMeme);
// api call to get the meme with the given id.


module.exports = router;