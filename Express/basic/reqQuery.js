//req.query is an object containing a collection of key-value pairs parsed from the query string of the URL. 
const express = require('express');
const app = express();

// Define a route handler for GET requests to '/search'
app.get('/search', (req, res) => {
  // Accessing individual query parameters
  const searchTerm = req.query.q;
  const pageNumber = req.query.page;

  // Output the received query parameters
  console.log('Search Term:', searchTerm);
  console.log('Page Number:', pageNumber);

  // Send a response back to the client
  res.send(`Search Term: ${searchTerm}, Page Number: ${pageNumber}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

