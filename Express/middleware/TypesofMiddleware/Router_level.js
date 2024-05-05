// Router-Level-Middleware
//can be used by router.use() method

//In the context of Node.js, a router is:

// - A feature provided by frameworks like Express.js.It helps to define routes for handling incoming HTTP requests.

// - Routes determine how the server should respond to requests based on the request method (GET, POST, etc.) and the request URL.

// - Routers can be used to organize and modularize the application's code by grouping related routes together.


const express = require('express');
const router = express.Router();
const app = express();

//routing 
router.use((req, res, next) => {  
    console.log('Time:', Date.now());
    next();
});

router.get('/', (req, res) => {
    res.send('Home page');
});

app.use(router); //here router is used when application want's to use it

app.listen(7070);