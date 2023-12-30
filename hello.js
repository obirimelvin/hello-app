// app.js

// Import the 'fs' module
const fs = require('fs');

//Import the 'express' module
//

const { MongoClient } = require('mongodb');
const express = require('express');
const app = express();
const port = 8080;

// Connection URI for your MongoDB database
const uri = 'mongodb://localhost:27017';
app.get('/', (req,res) => {
 res.send('Hello, Word!');
});


app.get('/provinces', async (req, res) => {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Use the "canadaDB" database
    const database = client.db('canadaDB');

    // Access the "allProvinces" collection
    const collection = database.collection('allProvinces');

    // Retrieve all documents from the "allProvinces" collection
    const provinces = await collection.find({}).toArray();

    // Send the retrieved data as JSON
    res.json(provinces);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
});
app.listen(port, '0.0.0.0', () => {
//Server Listening port
 console.log(`Server listening at http://localhost:${port}`);
});

