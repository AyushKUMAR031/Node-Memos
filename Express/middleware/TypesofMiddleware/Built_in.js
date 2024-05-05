// There is only one built-in middleware is → express.static

// This middleware function is based on serve-static, and is responsible for loading static assets such as HTML files, images, and so on.

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Check Source in inspect"); //public dat should be in source in devTools
    const data = fs.readFileSync('index2.html'); //adding html file to webpage will help to show public folder data in Source
    res.end(data.toString()); // as we use readFileSync data is returned in buffer format so to convert to string we use toString() before sending as response
});

app.listen(3030);