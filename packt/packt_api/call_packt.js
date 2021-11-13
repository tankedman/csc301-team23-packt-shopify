const fetch = require('node-fetch')

fetch('https://packt-project-development.herokuapp.com/login')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));



fetch('https://packt-project-development.herokuapp.com/users', {
  method: 'POST',
  body: JSON.stringify(),
  headers: {}
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));
