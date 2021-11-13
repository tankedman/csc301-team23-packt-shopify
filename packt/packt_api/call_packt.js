const fetch = require('node-fetch')

const apiResponse = await fetch('https://packt-project-development.herokuapp.com/users')
  .then(response => response.json())
  .then(data => console.log(data))

