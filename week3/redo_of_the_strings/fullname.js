"use strict";

function fullName(lastName, firstName, middleName) {
  // if/else statement created to not get "Harry undefined Potter" if a middle name is not given
  if (middleName === undefined) {
    console.log(firstName, lastName);
  } else console.log(firstName, middleName, lastName);
}

fullName("Potter", "Harry", "James"); // Harry James Potter
fullName("Potter", "Harry"); // Harry Potter
fullName("Harry", "Potter"); // Potter Harry
fullName("Potter", "Harry", "James", "Pottypotpot"); // Harry James Potter
