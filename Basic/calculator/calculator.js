const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


//getting input
app.post('/post', (req, res) => {
    let result;
    const { val1, val2, Operator } = req.body;
    console.log(req.body);
    if (Operator === '+') {
        console.log(val1);
        result = parseInt(val1) + parseInt(val2);
    }
    else if (Operator === "-") {
        result = parseInt(val1) - parseInt(val2);
    }
    else if (Operator === "*") {
        result = parseInt(val1) * parseInt(val2);
    }
    else if (Operator === "/") {
        result = parseInt(val1) / parseInt(val2);
    }
    res.send(`The result is ${result}`);
});

app.listen(8081);