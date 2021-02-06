const { rawListeners } = require('../models/meme');
const Meme = require('../models/meme');


module.exports.postMeme = function(req, res) {


    Meme.findOne({ url: req.body.url }, function(err, meme) {
        if (err) {
            console.log('error in creating the meme 1 ');
            return res.json(404, { message: "error creating the meme" });
        }
        if (meme) {
            console.log('meme alraedy present');
            return res.json(409, { message: "duplicate meme URL's not allowed" });
        } else {

            Meme.create({ name: req.body.name, url: req.body.url, caption: req.body.caption }, function(err, meme) {
                if (err) {
                    console.log('error in creating the meme 2 ');
                    return res.json(404, { message: "error creating the meme" });
                } else {
                    console.log('meme created');
                    return res.json(200, { id: meme.id });
                }

            });
        }
    });
}

module.exports.findMemes = function(req, res) {

    Meme.find({}, function(err, meme_objects) {
        if (meme_objects.length == 0) {
            console.log('no memes are present');
            return res.json(200, []);
        } else {
            let memes = [];
            for (let index = 0; index < meme_objects.length; index++) {
                memes.push({
                    id: meme_objects[index].id,
                    name: meme_objects[index].name,
                    url: meme_objects[index].url,
                    caption: meme_objects[index].caption
                });
            }
            console.log('memes are present');
            return res.json(200, memes);
        }
    });
}


module.exports.findUniqueMeme = function(req, res) {

    Meme.findById(req.params.id, function(err, meme) {
        if (meme) {
            console.log("meme found");
            return res.json(200, {
                id: meme.id,
                name: meme.name,
                url: meme.url,
                caption: meme.caption
            });
        } else {
            console.log('meme not found with given id');
            return res.json(404, { message: "meme does not exist with this id" });
        }
    });
}