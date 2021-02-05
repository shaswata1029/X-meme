const Meme = require('../models/meme');

module.exports.home = function(req, res) {
    Meme.find({}, function(err, memes) {
        if (err) {
            console.log('Error in fetching contacts');
            return res.end('Error 404');

        }
        return res.render('home', {
            title: "Home",
            memes: memes
        });

    });
}

module.exports.postMeme = function(req, res) {
    Meme.create({ name: req.body.name, url: req.body.url, caption: req.body.caption }, function(err, user) {
        if (err) {
            console.log('error in creating the user');
            return res.end('error 404');
        }
        console.log('meme created');
        return res.redirect('back');
    });
}