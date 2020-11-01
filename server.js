'use strict';

// Bring in Dependencies

const express = require('express');
const superagent = require('superagent');
const cors = require('cors');

require('dotenv').config();

// Create Port
const PORT = process.env.PORT || 3000;

// Start Express Application
const app = express();

// CORS
app.use(cors());

// Server looks for pages to serve browser
app.use(express.static('public'));

// Set default view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (request, response) => {
  console.log('No Booooooooleans here!')
response.status(200).render('pages/index');
});

app.get('/hello', (request, response) => {
console.log('I\'ll wear your face as a mask');
response.status(200).render('pages/hello');
});

app.get('/new', (request, response) => {
  console.log('Brains are better saute´d than boiled');
  response.status(200).render('pages/searches/new');
  });






// Start Server
app.listen(PORT, () => console.log(`Now listening on ${PORT}!`));