"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // When loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  console.log("prepareObjects");
  jsonData.forEach((jsonObject) => {
    let name;
    let type;
    let desc;
    let age;

    // Create an object prototype - name it Animal. This defines the template to store the data.
    const Animal = { name: "", type: "", desc: "", age: "" };

    // Creating an object from the prototype. The created object will have the same properties and values as the prototype.
    const animal = Object.create(Animal);

    // Getting the right values from the json by using substring, and assigning that to the object with dot notation
    animal.name = jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(" "));
    animal.type = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf(" ") + 1);
    animal.desc = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf("the") + 4, jsonObject.fullname.lastIndexOf(" "));
    animal.age = jsonObject.age;

    // Pushing the object prototype in to the empty array
    allAnimals.push(animal);

    console.log(animal);
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
