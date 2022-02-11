"use strict";

let person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};
console.log(person1);

// modify the object by by adding properties
person1.lastName = "Lind";
console.log(person1.lastName);
console.log(person1);

// modify the last name by setting the property to undefinded
person1.lastName = undefined;
console.log(person1.lastName);

// modify the object by deleting the property, but in the console this will also show as undefined
delete person1.lastName;
console.log(person1.lastName);

// modify the object with calculations
person1.age++;
// the age will now be 30
console.log(person1.age);
