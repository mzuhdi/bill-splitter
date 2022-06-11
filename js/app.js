const bill = document.querySelector("#bill");
const tipSelections = document.querySelector(".tip__button__section").children;
const numOfPeople = document.querySelector("#people");
const tipPerPerson = document.querySelector("#tip__per__person");
const totalPerPerson = document.querySelector("#total__per__person");

let billValue = 100.0;
let tipPercentageValue = 10;
let numOfPeopleValue = 2;
let totalTipPerPersonValue = 0.0;
let totalPerPersonValue = 0.0;

function calc() {
  let tip = billValue * (tipPercentageValue / 100);
  let total = billValue + tip;

  totalTipPerPersonValue = tip / numOfPeopleValue;
  totalPerPersonValue = total / numOfPeopleValue;

  console.log(totalTipPerPersonValue);
  console.log(totalPerPersonValue);
}
calc();
