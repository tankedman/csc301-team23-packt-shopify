const fetch = require("node-fetch");

API_KEY = "6de18130-637f-4c38-ac3e-81f18c8251d7";
LOCATION_ID = 1;

// This user data will depend on the situation
let userPhoneNumber = "9054161111";
//let userFirstName = "John";
//let userLastName = "Doe";

async function processRental(phoneNumber, numBags) {
  let userId;

  // Check if userId exists
  await fetch(
    "https://packt-project-development.herokuapp.com/users/phoneNumber",
    {
      method: "POST",
      body: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
      headers: {
        "x-api-key": "6de18130-637f-4c38-ac3e-81f18c8251d7",
        "Content-Type": "application/json",
      },
    }
  ).then((response) => {
    if (response.ok) {
      return response.json().then((data) => {
        userId = data.id;
      });
    }
  });

  // Create new user if user does not exist
  if (!userId) {
    await fetch("https://packt-project-development.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
      headers: {
        "x-api-key": "6de18130-637f-4c38-ac3e-81f18c8251d7",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          userId = data.id;
        });
      }
    });
  }

  // Add the rental
  for(i = 0; i<numBags; i++){
    await fetch("https://packt-project-development.herokuapp.com/rentals", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        startDate: new Date(),
        expiryDate: new Date(),
        rentalClientId: LOCATION_ID,
      }),
      headers: {
        "x-api-key": "6de18130-637f-4c38-ac3e-81f18c8251d7",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          console.log(data);
        });
      }
    });
  }
}

processRental(userPhoneNumber, userFirstName, userLastName).catch((e) => {
  console.log("There has been a problem with your operation: " + e.message);
});

// fetch('https://packt-project-development.herokuapp.com/rentals', {
//     method: 'POST',
//     body: JSON.stringify({
//     startDate: new Date("January 1, 2021 00:00:00"),
//     expiryDate: new Date("January 1, 2030 00:00:00"),
//     userId: 1,
//     rentalClientId: LOCATION_ID,
//     }),
//     headers: {
//       "x-api-key": API_KEY,
//       'Content-Type': 'application/json'
//     }
// }).then(res => res.text())
//   .then(json => console.log(json));
