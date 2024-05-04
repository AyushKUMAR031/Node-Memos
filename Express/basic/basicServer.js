const express = require('express')
//which helps in creating http server and handle requests/response.

const app = express() //creating an instance of express.

const port = 3000;


//here we are defining a route for handling request and response using get method
//done on root url 
app.get('/', (req, res) => {
    res.send('Hello World!') //Sending a response
})
//When a client makes a GET request to the root URL, 
//the callback function (req, res) => { ... } is executed. 


//starting the server
app.listen(port, () => {
    console.log(`Server is Listening on  http://localhost:${port}`)
})