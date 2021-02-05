const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ConnectI_db', { useNewUrlParser: true, useUnifiedTopology: true });
// connect to the database




//  acquire the connection to check if it is succesful

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected succesfully to database!!');
});
// if it is connected then print the message

module.exports = db;