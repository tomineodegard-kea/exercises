"use strict";
// -------- Capitalize(string), now with return --------
// let thisIsMyName = "tomine";
// let cap = capitalize(thisIsMyName);

// function capitalize(string) {
//   let capitalizeString = string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
//   return capitalizeString;
// }

// -------- fullName(lastName, firstName, middleName), now with return --------
let myFullName = "tomINE melLomnavn Ødegård";

function fullName(lastName, firstName, middleName) {
  let theFullName;
  if (middleName === undefined) {
    theFullName = `${(firstName, lastName)}`;
  } else {
    theFullName = `${(firstName, middleName, lastName)}`;
  }
  return theFullName;
}

console.log(myFullName);
