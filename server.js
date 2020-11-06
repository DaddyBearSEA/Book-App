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

// app.use(express.urlencoded({ extended: true }));  When you use for DATABASE.
app.use(express.static('./public'));

// -------------------Set default view engine
app.set('view engine', 'ejs');

/* -------------------   Routes-------------------------*/
app.get('/', (request, response) => {
  console.log('No Booooooooleans here!')
  response.status(200).render('pages/index');
});

app.get('/hello', (request, response) => {
  console.log('I\'ll wear your face as a mask');
  response.status(200).render('pages/hello');
});


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

app.get('/new', spookyBookSeaTitleHandler);  // searchs for the book info
// app.get('/search', spookyBookSeaAuthHandler);


// app.get('/new', (request, response) => {
//   console.log('Brains are better saute´d than boiled');
//   response.status(200).render('pages/searches/new');
// });





// ----------------------- Book Constructor ------------//

function Spookybooks(obj) {
  this.author = obj.volumeInfo.authors;
  this.title = obj.volumeInfo.title;
  this.description = obj.volumeInfo.description;
  // this.image_url = obj.volumeInfo.imageLinks.thumbnail;
  console.log('Constructor HIT!');
}


/* --------------------  Handlers  ------------------*/

function spookyBookSeaTitleHandler(request, response) {
  console.log('sppppooookkkkeeeeyyyy');
  let ourGhost = request.query.ghost;
  console.log('Our request : ', request.query);
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${ourGhost}`;
  console.log('URL: ', URL);

  superagent.get(URL)
    .then(pumpkin => {
      console.log(pumpkin);
      const spookyBookArr = pumpkin.body.items.map(zombie => {
        return new Spookybooks(zombie);

      });
      response.status(200).render('pages/searches/new', spookyBookArr);

    });
}



/* ------------------   Start Server -----------------*/
app.listen(PORT, () => console.log(`Now listening on ${PORT}!`));