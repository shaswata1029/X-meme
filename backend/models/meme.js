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


const Meme = mongoose.model('Meme', MemeSchema);

module.exports = Meme;