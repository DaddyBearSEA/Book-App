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


// // proof of life
// app.get('/', (request, response) => {
//   console.log('No Booooooooleans here!');
//   response.status(200).render('pages/index');
// });

// app.post('/hello', (request, response) => {
//   console.log('I\'ll wear your face as a mask');
//   response.status(200).render('pages/hello');
// });

// app.get('/search', spookyBookSeaAuthHandler);


// app.get('/new', (request, response) => {
//   console.log('Brains are better saute´d than boiled');
//   response.status(200).render('pages/searches/new');
// });





// ----------------------- Book Constructor ------------//

function Spookybooks(obj) {
  this.authors = (obj.authors) ? obj.authors: 'This was ghost written, no author found';
  this.title = (obj.title) ? obj.title: 'Who says a book needs a title? No title found.';
  this.description = (obj.description) ? obj.description: 'Oh, you want to know what this book is about? Read it, you\'ll figure it out.';
  this.image_url = (obj.imageLinks.smallThumbnail) ? obj.imageLinks.smallThumbnail: "https://i.imgur.com/J5LVHEL.jpg";
  // console.log('Constructor HIT!', this.authors);
}

// ^^^^^^^^^^JavaScript Array toString() Method for AUTHOR^^^^^^^^^^
// https://www.w3schools.com/jsref/jsref_tostring_array.asp#:~:text=The%20toString()%20method%20returns,not%20change%20the%20original%20array.




/* --------------------  Handlers  ------------------*/

function spookyBookSeaTitleHandler(request, response) {
  let blood = `https://www.googleapis.com/books/v1/volumes?q=`;
 

  if (request.body.ghost[1] === 'author') { blood += `+inauthor:${request.body.ghost[0]}`; }
  if (request.body.ghost[1] === 'title') { blood += `+intitle:${request.body.ghost[0]}`; }

  console.log('new URL: ', blood);
  superagent.get(blood)
    .then(pumpkin => {
      let witch = pumpkin.body.items.map(zombie => {
        return new Spookybooks(zombie.volumeInfo);
      })
      response.status(200).render('pages/searches/show', { searchResults: witch });
      // console.log('ZOMBIE.VOLUMEINFO', zombie.volumeInfo);
    })
  }

  function getBookshelf (request, response) {
    let SQL = 'SELECT * FROM books;';
    return client.query(SQL)
    .then(results => {
      return response.render('pages/index', {results: results.rows});
      return response.render('pages/index', {results: results.length});
    })
  }
  
//   function totalCount (request, response) {
//   let bookCount = 'SELECT COUNT (*) FROM books;';
//   return client.query(bookCount)
//     .then(results => {
//       console.log(results);
// return response.render('pages/index', {results: result.rows.count});
//   })
// }


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

