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

    Meme.findOne({ url: req.body.url }, function(err, meme) {
        if (err) {
            console.log('error in creating the meme  ');
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

module.exports.editMeme = function(req, res) {
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
        update.url = url;
    } else {
        update.caption = caption;
        update.url = url;
    }


    Meme.findByIdAndUpdate(id, update, { new: true }, function(err, meme) {
        if (err) {
            console.log('error in updating the user');
            return res.end('error 404');
        }
        console.log('meme updated');
        return res.redirect('back');
    });
}