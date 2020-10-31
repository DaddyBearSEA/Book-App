'use strict';

// Bring in Dependencies

const express = require('express');
const superagen = require('superagent');
const cors = require('cors');

require('dotenv').config();

// Create Port
const PORT = process.env.PORT || 3000;

// Start Express Application
const app = express();

// CORS
app.use(cors());

// Server looks for pages to serve browser
app.use(express.static('./public'));











// Start Server
app.listen(PORT, () => console.log(`Now listening on ${PORT}!`));