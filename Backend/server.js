// Import express
const express = require('express');

// Initialize the app
const app = express();
const port = 3000;  // You can use any port you prefer

// Define a /ping route
app.get('/ping', (req, res) => {
  res.send('Pong');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
