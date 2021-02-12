const express = require('express');
const router = express.Router();
// requiring express router
const homeController = require('../controllers/homecontroller.js');
// requiring controller actions


router.get('/', homeController.home);

router.use('/memes', require('../memes/index'));

router.post('/post_memes', homeController.postMeme);

router.post('/edit_memes/:id', homeController.editMeme);

module.exports = router;
// exporting the router