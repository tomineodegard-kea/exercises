"use strict";

// --- USING PARAMETERS IN A FUNCTION ---

let number1 = 2;
let theOtherNumber = 35;

let result;

// parameters only apply to the local function, and it is not able to be used outside the function.
function multiply(num1, num2) {
  result = num1 * num2;
  console.log(result);
}

// by using parameters in your functions, they are more abstract and general, and can be reused by changing the value of the parameters when calling the functions
multiply(number1, theOtherNumber);
multiply(23, 1000);
multiply(1, 80);

// ---------------------------------------------------------------
// --- DIFFERENT WAYS OF CREATING FUNCTIONS ---

sayHello("Peter");
// this way of creating functions, you can call the function everywhere, also before the function it self ---
function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

let sayWhat = function (firstName) {
  console.log(`What ever ${firstName}`);
};

// This is an arrow function
let sayGoodbye = (firstName) => {
  console.log(`Goodbye ${firstName}`);
};

sayWhat("Peter");
sayGoodbye("Peter");

// ---------------------------------------------------------------
// --- MULTIPLE PARAMETERS ---

function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
}

presentPet("Tomine", "cat", "Rulla");
