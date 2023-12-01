const express = require('express');
const router = express.Router();
const path = require('path');


router.get('^/$|/index(.html)?', // This regex matches the root path and /index and /index.html
    (req, res) => {
        res.sendFile(
            path.join(__dirname, "..", "views", "index.html") // This is the path to the index.html file
        ); // This sends the index.html file to the client

})

module.exports = router; // This exports the router object so it can be used in server.js