const express = require('express');
const app = express();

app.use(express.static("./")); // Serve static files from the current directory

const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});