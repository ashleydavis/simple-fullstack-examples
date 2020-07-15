const express = require('express')
const app = express();
const port = 3000;

//
// Serve static files from the "public" sub-directory.
//
app.use(express.static("public"));

//
// Example REST API via HTTP GET.
//
app.get("/my-rest-api", (req, res) => {

    // Return whatever data you like here...
    res.json({
        msg: "Hello from the backend!",
    });
});

//
// Start the web server.
//
app.listen(port, () => {
    console.log(`Point your web browser at http://localhost:${port}`);
});