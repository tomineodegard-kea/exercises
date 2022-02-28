"use strict";
const url1 = "https://petlatkea.dk/2021/hogwarts/students.json";
const url2 = "https://petlatkea.dk/2021/hogwarts/families.json";

function start() {
  console.log("1");
  loadFile1();
  console.log("2");
  loadFile2();
  console.log("3");
  useData();
}

function useData() {
  console.log("6");
}

async function loadFile1() {
  const response = await fetch(url1);
  const data = await response.json;
  console.log("4");
}

async function loadFile2() {
  const response = await fetch(url2);
  const data = await response.json;
  console.log("5");
}

start();
