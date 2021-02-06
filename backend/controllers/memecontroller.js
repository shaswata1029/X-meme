const Meme = require('../models/meme');


module.exports.postMeme = function(req, res) {

    Meme.findOne({ url: req.query.url }, function(err, meme) {
        if (err) {
            console.log('error in creating the meme ');
            return res.json(404, { message: "error creating the meme" });
        }
        if (meme) {
            console.log('meme alraedy present');
            return res.json(409, { message: "duplicate meme URL's not allowed" });
        } else {

            Meme.create({ name: req.query.name, url: req.query.url, caption: req.query.caption }, function(err, meme) {
                if (err) {
                    console.log('error in creating the meme ');
                    return res.json(404, { message: "error creating the meme" });
                } else {
                    console.log('meme created');
                    return res.json(200, { id: meme.id });
                }

            });
        }
    });
}