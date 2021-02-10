const { rawListeners } = require('../models/meme');
const Meme = require('../models/meme');
const isImageUrl = require('is-image-url');


module.exports.postMeme = function(req, res) {


    Meme.findOne({ url: req.body.url }, function(err, meme) {
        if (err) {
            // console.log('error in creating the meme  ');
            return res.status(404).json({ message: "error creating the meme" });
        }
        if (meme) {
            // console.log('meme alraedy present');
            return res.status(409).json({ message: "duplicate meme URL's not allowed" });
        } else {

            // let bool = isImageUrl(req.body.url);
            // if (!bool) {
            //     console.log('Not a valid Image URL');
            //     return res.status(404).json({ message: "Not a valid Image URL" });
            // }


            Meme.create({ name: req.body.name, url: req.body.url, caption: req.body.caption }, function(err, meme) {
                if (err) {
                    // console.log('error in creating the meme 2 ');
                    return res.json(404, { message: "error creating the meme" });
                } else {
                    // console.log('meme created');
                    return res.json(201, { id: meme.id });
                }


            });
        }
    });
}

module.exports.findMemes = function(req, res) {

    Meme.find({}, function(err, meme_objects) {
        if (meme_objects.length == 0) {
            // console.log('no memes are present');
            return res.status(200).json([]);
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
            // console.log('memes are present');
            return res.status(200).json(memes);
        }
    });
}


module.exports.findUniqueMeme = function(req, res) {

    Meme.findById(req.params.id, function(err, meme) {
        if (meme) {
            // console.log("meme found");
            return res.status(200).json({
                id: meme.id,
                name: meme.name,
                url: meme.url,
                caption: meme.caption
            });
        } else {
            // console.log('meme not found with given id');
            return res.status(404).json({ message: "meme not found with given id" });
        }
    });
}

module.exports.editMeme = function(req, res) {

    Meme.findById(req.params.id, function(err, meme) {
        if (meme) {
            // console.log("meme found");
            Meme.findOne({ url: req.body.url }, function(err, meme) {
                if (err) {
                    // console.log('error in updating the meme 1');
                    return res.status(404).json();
                }
                if (meme) {
                    // console.log('meme alraedy present');
                    return res.status(409).json();
                } else {
                    const url = req.body.url;
                    const caption = req.body.caption;
                    const id = req.params.id;
                    let update = {};
                    if (caption == null && url == null) {
                        // console.log('nothing to be updated');
                        return res.status(403).json();
                    }

                    if (url == null) {
                        update.caption = caption;
                    } else if (caption == null) {

                        let bool = isImageUrl(req.body.url);
                        if (!bool) {
                            // console.log('Not a valid Image URL');
                            return res.status(404).json();
                        }
                        update.url = url;
                    } else {
                        let bool = isImageUrl(req.body.url);
                        if (!bool) {
                            // console.log('Not a valid Image URL');
                            return res.status(404).json();
                        }

                        update.caption = caption;
                        update.url = url;
                    }


                    Meme.findByIdAndUpdate(id, update, { new: true }, function(err, meme) {
                        if (err) {
                            // console.log('error in updating the meme 2');
                            return res.status(404).json();
                        }
                        // console.log('meme updated');
                        return res.status(204).json();
                    });
                }
            });


        } else {
            // console.log("meme not found with given id");
            return res.status(404).json();
        }
    });
}