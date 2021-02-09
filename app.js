const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// requring the modules 

const app = express();
const port = 8081;
// configuring the port
dotenv.config();

// database connection
const db = require('./config/mongoose');

// middlewares
app.use(express.static('./frontend/assets'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './frontend/views');
// setting the view engine as EJS and linking the views file

app.use('/', require('./backend/routes/index.js'));
// setting up the router



app.listen(process.env.PORT, '0.0.0.0', function(err) {
    if (err) {
        console.log(`Error is ${err} on port ${port}`);
        return;
    }
    console.log(`Server is running on port ${process.env.PORT}`);
});
// setting up the server with express for deployment

// app.listen(port, function(err) {
//     if (err) {
//         console.log(`Error is ${err} on port ${port}`);
//         return;
//     }
//     console.log(`Server is running on port ${port}`);
// });

// setting up the server for local testing