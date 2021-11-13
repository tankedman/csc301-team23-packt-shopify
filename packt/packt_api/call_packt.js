const fetch = require('node-fetch')

fetch('https://packt-project-development.herokuapp.com/login')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));

let todo = {
  phoneNumber: 9054164444,
  password: "admin"
};

token = "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwicGhvbmVOdW1iZXIiOiI5MDU0MTY0NDQ0IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjM2NzcyMzI3LCJleHAiOjE2MzY3Nzk1Mjd9.LGR0xp8fusRC1Dz7xrRib4axW8cSbmjHh4jKuGOaTr0"

fetch('https://packt-project-development.herokuapp.com/login', {
  method: 'POST',
  body: JSON.stringify(todo),
  headers: { 'Content-Type': 'application/json' }
})
  //.then(response => token = response.headers.get('set-cookie'))
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));


fetch('https://packt-project-development.herokuapp.com/users', {
  headers:{
    cookie: token
  }
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));


  //post rentals

  fetch('https://packt-project-development.herokuapp.com/rentals', {
  method: 'POST',
  body: JSON.stringify(todo),
  headers: { 'Content-Type': 'application/json' }
})
  //.then(response => token = response.headers.get('set-cookie'))
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(err => console.log(err));

