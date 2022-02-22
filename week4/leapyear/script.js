"use strict";

// --- OUR FIST ATTEMT, BUT THIS DOES NOT WORK ---
// console.log("Is it leapYear?",leapYear(2020));
// function leapYear(whichYear){

//     let returnFlag = false;
//     if(whichYear / 400){
//             returnFlag = true;

//         }
//     } else if (whichYear / 100){
//         if(whichYear / 400){
//             returnFlag = true;
//         }

//     }
//     return returnFlag
// }

function leapYear(year) {
  let leapFlag = false;
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      leapFlag = true;
    }
  } else if (year % 4 === 0) {
    leapFlag = true;
  }

  return leapFlag;
}

console.log("Is it leapYear?", leapYear(2021));
