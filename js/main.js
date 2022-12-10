"use strict";

//   =============FizzBuzz===============
let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elInputTwo = document.querySelector(".js-input-two");
let elInptThree = document.querySelector(".js-input-three");
let elInputFour = document.querySelector(".js-input-four");
let elResult = document.querySelector(".js-result");

// elForm.addEventListener("submit", function(e) {
//   e.preventDefault();

//     let elInputVal = elInput.value;

//   if(elInputVal % 3 == 0 && elInputVal % 5 == 0) {
//       elResult.textContent = `${elInputVal}: 3ga ham 5ga ham bolinadi`
//   } else if(elInputVal % 3 == 0) {
//       elResult.textContent = `${elInputVal}: faqat 3 ga bolinadi`
//   } else if(elInputVal % 5 == 0) {
//       elResult.textContent = `${elInputVal}: faqat 5 ga bolinadi`
//   } else if(isNaN(elInputVal)) {
//     elResult.textContent = `Enter only numbers!`
//   } else {
//       elResult.textContent = `${elInputVal}: ikkalasiga ham bilinmaydi`
//   };

// });




//================= IELTS Result =================
// elForm.addEventListener("submit", function(e) {
//   e.preventDefault()
  
//   let elInputOneVal = +elInput.value
//   let elInputTwoVal = +elInputTwo.value
//   let elInputThreeVal = +elInptThree.value
//   let elInputFourVal = +elInputFour.value
  

//   let elInputVals = elInputOneVal + elInputTwoVal + elInputThreeVal + elInputFourVal;

//   elResult.textContent = `${Math.round(elInputVals / 4)}`;
// });




// ================ Juft va toq sonlar ================
// elForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let elInputVal = elInput.value;

//   if (elInputVal % 2 == 0) {
//     elResult.textContent = (`Bu juft son: ${elInputVal}`);
//   } else {
//     elResult.textContent = (`Bu toq son: ${elInputVal}`);
//   }
// });
