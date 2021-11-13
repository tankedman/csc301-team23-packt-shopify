require('@babel/register')({
  presets: ['@babel/preset-env'],
  ignore: ['node_modules']
});


// Import the rest of our application.
module.exports = require('./server.js');

const fetch = require('node-fetch')

const apiResponse = await fetch(
  'https://cat-fact.herokuapp.com/facts/' 
)