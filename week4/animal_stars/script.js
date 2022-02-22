"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
let filter;

// creating the  prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  // TO DO: Add the star to the prototype, setting the star to default false
  star: false,
};

function start() {
  console.log("ready");
  const filterBtn = document.querySelectorAll("[data-action=filter]");

  filterBtn.forEach((btn) => {
    btn.addEventListener("click", chooseFilter);
  });

  loadJSON();
}

function prepareData(filter) {
  let filteredAnimals = allAnimals.filter(filter);
  return filteredAnimals;
}

// ------- LOAD JSON FILE -------
async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(prepareAnimalObject);

  displayList(allAnimals);
}

// ------- FILTERING OPTIONS -------
function chooseFilter() {
  filter = this.dataset.filter;
  buildList();
}

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

function isDog(animal) {
  if (animal.type === "dog") {
    return true;
  } else {
    return false;
  }
}

function all() {
  return true;
}

function prepareAnimalObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function buildList() {
  let filteredAnimals;

  //filter = this.dataset.filter;

  if (filter === "cat") {
    filteredAnimals = prepareData(isCat);
  } else if (filter === "dog") {
    filteredAnimals = prepareData(isDog);
  } else if (filter === "*") {
    filteredAnimals = prepareData(all);
  }

  displayList(filteredAnimals);
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // TO DO: Show ⭐ or ☆
  if (animal.star) {
    clone.querySelector("[data-field=star]").textContent = "⭐";
  } else {
    clone.querySelector("[data-field=star]").textContent = "☆";
  }

  // TO DO: Add eventlistner to click on star
  clone.querySelector("[data-field=star]").addEventListener("click", toggleStar);
  function toggleStar() {
    console.log("toggleStar");
    if (animal.star) {
      animal.star = false;
    } else {
      animal.star = true;
    }
    console.log(animal);
    buildList();
  }

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
