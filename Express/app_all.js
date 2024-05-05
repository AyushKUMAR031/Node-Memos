// - It will attach to the app’s implicit router.

// - It attaches a particular piece of middleware to all HTTP methods, and if attached in the main config file will globally apply the middleware to all requests made to your app.

// - Likeapp.use, it is also possible to specify a path for which the middleware should be applied.

const express = require('express');
const app = express();

// Middleware function to log message for routes beginning with /api
app.all('/api/*', function(req, res, next) {
  console.log('only applied for routes that begin with /api');
  next(); // Pass control to the next middleware function
});

// Define your API routes here
app.get('/api/test', (req, res) => {
  res.send('This is a test route under /api');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
