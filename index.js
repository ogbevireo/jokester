const jokes = require('give-me-a-joke');
const color = require('colors');
// console.dir(jokes);

// To get a random dad joke
jokes.getRandomDadJoke (function(joke) {
   console.log(joke.rainbow);
});