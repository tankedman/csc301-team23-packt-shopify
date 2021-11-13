const fetch = require('node-fetch')

fetch('https://packt-project-development.herokuapp.com/login')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));

let todo = {
  phoneNumber: 9054164444,
  password: "admin"
};

fetch('https://packt-project-development.herokuapp.com/login', {
  method: 'POST',
  body: JSON.stringify(todo),
  headers: { 'Content-Type': 'application/json' }
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));


fetch('https://packt-project-development.herokuapp.com/users')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));