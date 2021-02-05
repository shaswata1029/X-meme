const express = require('express');
const router = express.Router();
const memeController = require('../controllers/memecontroller');


router.post('/', memeController.postMeme);


module.exports = router;