const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

function isArmstrongNumber(num) {
    const len = num.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum += parseInt(num[i]) ** len;
    }

    return sum == num;
}

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/post',(req,res)=>{
    const {number} = req.body;

    console.log(isArmstrongNumber(number));

    if(isArmstrongNumber(number)){
        res.send(`The ${number} is an Armstrong Number`);
    }
    else{
        res.send(`The ${number} is not an Armstrong Number`);
    }
});

app.listen(8081);