// middleware is executed before a request is recieved by route handler
// and before the response is sent to the client
const expres = require('express');
const app = expres();

//defining custom-middleware [application-middleware]
function logger(req, res, next){
  console.log('This is a custom middleware');
  next();
}

app.use(logger); //cutom middleware is added to the application 

app.get('/', (req, res) => {
  res.send('Check Console'); //at every request, the custom middleware is executed
})



//now a middleware can also be directly add to route handler

function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  console.log(req);
  next()
}

function logMethod (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

const logStuff = [logOriginalUrl, logMethod] //array of middleware is created

app.get('/log', logStuff, (req, res) => { // here logStuff act as middleware
  res.send('URL and Method in Console.')
})

//server port
app.listen(3000);