"use strict";

function fullName(lastName, firstName, middleName) {
  if (middleName === undefined) {
    console.log(firstName, lastName);
  } else console.log(firstName, middleName, lastName);
}

fullName("Potter", "Harry", "James");
fullName("Potter", "Harry");
