let num1 = parseFloat(prompt("Enter the first number"));
let num2 = parseFloat(prompt("Enter the second number"));
let answer; 

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  answer = num1 + num2;
  document.getElementById("sum-el").textContent = "Sum: " + answer;
}

function subtract() {
  answer = num1 - num2;
  document.getElementById("sum-el").textContent = "Sum: " + answer;
}

function divide() {
  answer = num1 / num2;
  document.getElementById("sum-el").textContent = "Sum: " + answer;
}

function multiply() {
  answer = num1 * num2;
  document.getElementById("sum-el").textContent = "Sum: " + answer;
}
