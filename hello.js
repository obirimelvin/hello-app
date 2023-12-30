// app.js

// Import the 'fs' module
const fs = require('fs');

//Import the 'express' module
//

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req,res) => {
 res.send('Hello, Word!');
});

app.listen(port, '0.0.0.0', () => {
//Server Listening port
 console.log(`Server listening at http://localhost:${port}`);
});

