const fetch = require('node-fetch')

const apiResponse = await fetch('https://google.com')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));

