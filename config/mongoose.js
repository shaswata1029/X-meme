const mongoose = require('mongoose');
// requiring mongoose

// mongoose.connect('mongodb+srv://shaswata1029:sssbn1029@cluster0.1wybo.mongodb.net/X-meme?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
// //  connect to the database

// mongoose.connect('mongodb+srv://shaswata1029:sssbn1029@cluster0.1wybo.mongodb.net/X-meme_db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
// connect to the database

// for public deployment

mongoose.connect('mongodb://localhost/X-meme_db', { useNewUrlParser: true, useUnifiedTopology: true });

// for local testing 
//  connect to the database


//  acquire the connection to check if it is succesful

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected succesfully to database!!');
});
// if it is connected then print the message

module.exports = db;
// exporting the module of database