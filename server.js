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

// ----------  Server looks for pages to serve browser -- Application Middleware
// app.use(express.json());
app.use(express.urlencoded({ extended: true })); // When you use for DATABASE.
app.use(express.static('public'));

// -------------------Set default view engine
app.set('view engine', 'ejs');

/* -------------------   Routes-------------------------*/
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


/* TODO:
1. constructor to function to model your data
  a. Search for Title:  https://www.googleapis.com/books/v1/volumes?q=${title}  
  b. search for Authors: https://www.googleapis.com/books/v1/volumes?q=${author} 
  c. Max Results: https://www.googleapis.com/books/v1/volumes?q=${title}&max-results=10
  STRETCH GOAL - Add number of results

2. Populate show.ejs with response from API call

3. Validate Data and use IMG for no book covers - SUPERAGENT

4. Post Request for / searches - post request to show 10 results.
  a. map method used to display results
  b. new instance for each book instance
  c. searches/show 
*/


// app.get('/search', spookyBookSeaAuthHandler);


// app.get('/new', (request, response) => {
//   console.log('Brains are better saute´d than boiled');
//   response.status(200).render('pages/searches/new');
// });





// ----------------------- Book Constructor ------------//

function Spookybooks(obj) {
  this.author = obj.authors;
  this.title = obj.title;
  this.description = obj.description;
  this.image_url = obj.imageLinks.thumbnail;
  console.log('Constructor HIT!');
}


/* --------------------  Handlers  ------------------*/

function spookyBookSeaTitleHandler(request, response) {
  console.log('sppppooookkkkeeeeyyyy');
  console.log('Our request : ', request.body.ghost[0]);
  let blood = `https://www.googleapis.com/books/v1/volumes?q=`;


  /* ------------------  what in the hell is wrong with these if line?  ----*/
  // s/b  https://www.googleapis.com/books/v1/volumes?q=+intitle:IT  - Title
  // if (request.body.ghost[1] === 'title') { blood += `+intitle:${request.body.ghost[0]}`; }

  if (request.body.ghost[1] === 'author') { blood += `+inauthor:${request.body.ghost[0]}`; }
  if (request.body.ghost[1] === 'title') { blood += `+intitle:${request.body.ghost[0]}`; }

  console.log('new URL: ', blood);


  superagent.get(blood)
    .then(pumpkin => pumpkin.body.items.map(zombie => {
      new Spookybooks(zombie.volumeInfo);
    }))

    .then(witch => response.render('pages/searches/show', { searchResults: witch }));
  console.log('superagent Squirrel');

  // response.status(200).render('pages/searches/new');

}




/* ------------------   Start Server -----------------*/
app.listen(PORT, () => console.log(`Now listening on ${PORT}!`));
