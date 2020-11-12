'use strict';

// Bring in Dependencies

const express = require('express');
const superagent = require('superagent');
const cors = require('cors');
const pg = require('pg');

require('dotenv').config();

// Create Port
const PORT = process.env.PORT || 3000;

// Database connection
const client = new pg.Client(process.env.DATABASE_URL);
client.connect()
client.on('error', err => console.error(err));
console.log('DATABASE IS LIVE!!!')

// Start Express Application
const app = express();

// CORS
app.use(cors());

// ----------  Server looks for pages to serve browser -- Application Middleware
// app.use(express.json());
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// -------------------Set default view engine
app.set('view engine', 'ejs');

/* -------------------   Routes-------------------------*/
app.get('/', getBookshelf);
// app.get('/', totalCount);

app.get('/new', (request, response) => { // displays search page
  console.log('I\'ll wear your face as a mask');
  response.render('pages/searches/new');
});
app.post('/new', spookyBookSeaTitleHandler); // returns the search for the book info

app.post('/searches', booShelf); 
app.get('/details', (request, response)=> {
  console.log('Skinned alive');
  response.render('pages/details');
});


// ----------------------- Book Constructor ------------//

function Spookybooks(obj) {
  this.authors = obj.authors || 'This was ghost written, no author found';
  this.title = obj.title || 'Who says a book needs a title? No title found.';
  this.description = obj.description || 'Oh, you want to know what this book is about? Read it, you\'ll figure it out.';
  this.image_url = obj.imageLinks ? obj.imageLinks.smallThumbnail : `https://i.imgur.com/J5LVHEL.jpg`;
  this.isbn = obj.industryIdentifiers ? obj.industryIdentifiers[0].identifier : 'ISBN is Ghostly';

}

// ^^^^^^^^^^JavaScript Array toString() Method for AUTHOR^^^^^^^^^^
// https://www.w3schools.com/jsref/jsref_tostring_array.asp#:~:text=The%20toString()%20method%20returns,not%20change%20the%20original%20array.




/* --------------------  Handlers  ------------------*/
function pinkyHandler(request, response, error) { response.status(200).render('pages/searches/new') }; //SEARCH HANDLER
// function errorHandler(request, response, error) {response.status(404).render('pages/error')};
function blinkyHandler(request, response, error) { response.status(500).render('pages/error') }; // ERROR HANDLER


function spookyBookSeaTitleHandler(request, response) {
  let blood = `https://www.googleapis.com/books/v1/volumes?q=`;
console.log('SPOOKY BOOKS REQUEST', request);
console.log('SPOOKY BOOKS RESPONSE', response);

  if (request.body.ghost[1] === 'author') { blood += `+inauthor:${request.body.ghost[0]}`; }
  if (request.body.ghost[1] === 'title') { blood += `+intitle:${request.body.ghost[0]}`; } // 1 should be 0 (broken)

  console.log('new URL: ', blood);
  superagent.get(blood)
    .then(pumpkin => {
      let witch = pumpkin.body.items.map(zombie => {
        return new Spookybooks(zombie.volumeInfo);
      })
      response.status(200).render('pages/searches/show', { searchResults: witch });
      // console.log('ERROR CONSOLE LOG', error);
      // console.log('ZOMBIE.VOLUMEINFO', zombie.volumeInfo);
    })
    // .catch (error => blinkyHandler(request, response, error));
  }

function getBookshelf(request, response) {
  let SQL = 'SELECT * FROM books;';
  return client.query(SQL)
    .then(results => {
      return response.render('pages/index', { results: results.rows });
      return response.render('pages/index', { results: results.length });
    })
}

function booShelf(request, response) {
  let booSql = `INSERT INTO books (author, title, isbn, image_url, description) VALUES ($1, $2, $3, $4, $5) returning *`;
  // console.log('REQUEST.BODY', witch);
  const params = [request.body.author, request.body.title, request.body.isbn, request.body.image_url, request.body.description];
  console.log('PARAMAMAMAMA', params);
  console.log('Boo, this inserts the DB', booSql);
  client.query(booSql, params)

  .then(boo => response.status(200).redirect('/details'))
  .catch(error => {
    // blinkyHandler(error); 
    console.log('BLINKY HANDLER', error);
  });

}


// client.connect()
//   .then(() => { 
//     app.listen(PORT, () => {
//       console.log(`Now listening on ${PORT}!`)
//       console.log('Database is active');
//     });
//   })
//   .catch(error => console.error(error));


/* ------------------   Start Server -----------------*/
app.listen(PORT, () => console.log(`Now listening on ${PORT}!`));

