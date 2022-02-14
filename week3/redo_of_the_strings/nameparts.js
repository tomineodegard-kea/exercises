"use strict";

function getNameParts(fullname) {
  let firstName = fullname.substring(fullname.indexOf(0), fullname.indexOf(" "));
  let middleName = fullname.substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "));
  let lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);

  console.log({ firstName, middleName, lastName });
}

getNameParts("Tomine Petra Thea Ødegård");
