const Meme = require('../models/meme');
const isImageUrl = require('is-image-url');

module.exports.home = function(req, res) {
    Meme.find({}, function(err, memes) {
        if (err) {
            console.log('Error in fetching contacts');
            return res.end('Error 404');

        }
        return res.render('home', {
            title: "X-meme",
            memes: memes
        });

    });
}

module.exports.postMeme = function(req, res) {

    let bool = isImageUrl(req.body.url);
    if (!bool) {
        console.log('error in creating the meme');
        return res.end('<h1>Error 404,not a valid image url</h1>');
    } else {
        Meme.findOne({ url: req.body.url }, function(err, meme) {
            if (err) {
                console.log('error in creating the meme');
                return res.end('Error 404');
            }
            if (meme) {
                console.log('meme alraedy present');
                return res.end('Error 409, Meme already present');
            } else {

                Meme.create({ name: req.body.name, url: req.body.url, caption: req.body.caption }, function(err, meme) {
                    if (err) {
                        console.log('error in creating the meme ');
                        return res.end('Error 404');
                    }
                    console.log('meme created');
                    return res.redirect('back');
                });
            }
        });
    }
}

module.exports.editMeme = function(req, res) {


    Meme.findOne({ url: req.body.url }, function(err, meme) {
        if (err) {
            console.log('error in updating the meme');
            return res.end('Error 404');
        }
        if (meme) {
            console.log('meme alraedy present');
            return res.end('Error 409, Meme already present');
        } else {
            const url = req.body.url;
            const caption = req.body.caption;
            const id = req.params.id;
            let update = {};
            if (caption == "" && url == "") {
                return res.redirect('back');
            }

            if (url == "") {
                update.caption = caption;
            } else if (caption == "") {
                let bool = isImageUrl(req.body.url);
                if (!bool) {
                    console.log('error in creating the meme');
                    return res.end('<h1>Error 404,not a valid image url</h1>');
                }
                update.url = url;
            } else {
                let bool = isImageUrl(req.body.url);
                if (!bool) {
                    console.log('error in creating the meme');
                    return res.end('<h1>Error 404,not a valid image url</h1>');
                }
                update.caption = caption;
                update.url = url;
            }


            Meme.findByIdAndUpdate(id, update, { new: true }, function(err, meme) {
                if (err) {
                    console.log('error in updating the meme');
                    return res.end('error 404');
                }
                console.log('meme updated');
                return res.redirect('back');
            });
        }
    });


}