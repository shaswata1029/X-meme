const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 8081;


// database connection
const db = require('./config/mongoose');

// middlewares
app.use(express.static('./frontend/assets'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/', require('./backend/routes/index.js'));

app.set('view engine', 'ejs');
app.set('views', './frontend/views');

app.listen(port, function(err) {
    if (err) {
        console.log(`Error is ${err} on port ${port}`);
        return;
    }
    console.log(`Server is running on port ${port}`);
});