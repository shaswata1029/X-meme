const express = require('express');


const app = express();
const port = 8080;


app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err) {
    if (err) {
        console.log(`Error is ${err} on port ${port}`);
        return;
    }
    console.log(`Server is running on port ${port}`);
});