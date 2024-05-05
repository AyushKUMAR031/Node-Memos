const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
//Post:
// - Used for sending data to the server.
// - Data in the Body part
// - No data length restrictions.
// - Not cached by browsers, so suitable for sensitive data

//Middlware to parse the url 
app.use(bodyParser.urlencoded({ extended: false })); 
//extended false -> in string or array
//extended true -> in object

// If POST URL = `user[name]=John&user[age]=30`
// extended: true: , then `req.body` = `{ user: { name: 'John', age: '30' } }`. (a nested object structure)
// extended: false, then  `req.body` = `{ 'user[name]': 'John', 'user[age]': '30' }`. (flat object structure with no nesting)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname ,'./public/index2.html')); //sending file to webpage
});

//handle get request at /post route
app.get('/post', (req, res) => {
  res.send('Post Created');
});

//handle post request at /post route
app.post('/post', (req, res) =>{
  console.log(req.body);
  const { title, content } = req.body; //Extracting request from body

  //another way -> const title = req.body.title , const content = req.body.content

  console.log('Received POST request with title:', title, 'and content:', content);
  //we can save this request to db if needed.
  
  res.send('Post created!!');//seen in dev tool
});


app.listen(3030);