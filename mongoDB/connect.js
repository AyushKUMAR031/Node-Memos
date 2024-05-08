const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/trial')
    .then(()=>{
        console.log('connected to database');
    })
    .catch(()=>{
        console.log('connection failed');
    })

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

const User = mongoose.model('User', userSchema);

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    // const data = fs.readFileSync('index.html');
    // res.send(data);
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/submit',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = new User({
        username: username,
        password: password
    });

    user.save()
    .then((user) => {
        res.send('User registered successfully!');
    })
    .catch((err) => {
        res.status(400).send('Unable to save to database');
    });

});

app.listen(8080);
