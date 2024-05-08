const port = process.env.PORT || 3000;
//any port we are getting will be taken
//env -> environment variable
//many platforms provides serverless architecture ,like kubernetes
//so they set environment variable, and as we don't have it
//we set or(||) option with a port number(3000).
//without setting or option it show port number as undefined.

res.statusCode = 200;
//The statusCode property is a part of the response object in Node.js, and by setting it to 200, we're telling the client that everything went well with the request.

res.setHeader('Content-Type','text/html') 
//setting header means -> what type of data is going to send in the response.

res.end();
//Function used (particularly with the Express.js framework) to conclude the response process. 
//res.end() is derived from the response.end() method in the Node core’s http.ServerResponse.
//It is employed to promptly conclude the response without including any data.