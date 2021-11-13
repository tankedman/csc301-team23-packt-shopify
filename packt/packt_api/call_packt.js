const fetch = require('node-fetch')

fetch('https://packt-project-development.herokuapp.com/users')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));

