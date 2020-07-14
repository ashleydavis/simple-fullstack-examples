const express = require('express')
const app = express();
const port = 3000;

//
// Serve static files from the "public" sub-directory.
//
app.use(express.static("public"));

//
// Start the web server.
//
app.listen(port, () => {
    console.log(`Point your web browser at http://localhost:${port}`);
});