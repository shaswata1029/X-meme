const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homecontroller.js');


router.get('/', homeController.home);
router.use('/memes', require('../memes/index'));
router.post('/post_memes', homeController.postMeme);
router.post('/edit_memes/:id', homeController.editMeme);

module.exports = router;