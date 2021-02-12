const mongoose = require('mongoose');

const MemeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// creating the schema of the memes


const Meme = mongoose.model('Meme', MemeSchema);
// creating the model from the schema

module.exports = Meme;
// exporting the schema