const bill = document.querySelector("#bill");
// const tipSelections = Array.from(
//   document.querySelector(".tip__button__section").children
// );
const tipSelectionButtons = document.querySelectorAll(".tip__button");
const numOfPeople = document.querySelector("#people");
const tipPerPerson = document.querySelector("#tip__per__person");
const totalPerPerson = document.querySelector("#total__per__person");

let billValue = 0.0;
let tipPercentageValue = 0;
let numOfPeopleValue = 1;
let totalTipPerPersonValue = 0.0;
let totalPerPersonValue = 0.0;

bill.addEventListener("input", (e) => {
  console.log("bill " + e.target.value);
  billValue = e.target.value;
  console.log(billValue);
});

tipSelectionButtons.forEach((tipButton) => {
  tipButton.addEventListener("click", (e) => {
    tipPercentageValue = e.target.value;
    console.log(tipPercentageValue);
    calc();
  });
});

numOfPeople.addEventListener("input", (e) => {
  console.log("people " + e.target.value);
  numOfPeopleValue = e.target.value;
  console.log(numOfPeopleValue);
});

function calc() {
  let tip = parseFloat(billValue * (tipPercentageValue / 100));
  let total = parseFloat(billValue) + parseFloat(tip);

  totalTipPerPersonValue = tip / numOfPeopleValue;
  totalPerPersonValue = total / numOfPeopleValue;

  console.log(totalTipPerPersonValue);
  console.log(totalPerPersonValue);

  totalPerPerson.value = "$" + totalPerPersonValue.toFixed(2);
}

/**
 * The total per person should get updated as
 * when you are finish inputting bill + tip
 *
 */
