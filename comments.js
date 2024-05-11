// Create web server
// npm install express
// npm install body-parser

// Import express
const express = require('express');
const app = express();

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import comments
const comments = require('./comments');

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});