const Meme = require('../models/meme');


module.exports.postMeme = function(req, res) {



    Meme.create({ name: req.query.name, url: req.query.url, caption: req.query.caption }, function(err, user) {
        if (err) {
            console.log('error in creating the user');
            return res.json(404);
        }
        console.log('meme created');
        return res.json(200, { message: "ok" });
    })

    // return res.end('<h1> welcome to the page </h1>');
}