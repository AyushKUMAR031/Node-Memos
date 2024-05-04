const http = require('http');
const fs = require('fs');

const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/madara-uchiha', (req, res) => {
    res.statusCode = 200;
    res.end('<center><h1>I am the Ghost of Uchiha</h1><h2>None other than UCHIHA MADARADA</h2></centre>');
});

app.get('/uchiha-clan', (req, res) => {
    res.statusCode = 200;
    const data = fs.readFileSync('index.html');
    res.end(data.toString());
});

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.end('<h1>Wake up to reality! </h1><br><h2>Nothing ever goes as planned in this world. </h2>')

});

app.get('*', (req, res) => { //default url
    res.statusCode = 404;
    res.end('<p>The page is not found on Server</p>');

});



app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

