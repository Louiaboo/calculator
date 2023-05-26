const screen = document.querySelector(".screen");
const nine = document.querySelector(".nine");
const eight = document.querySelector(".eight");
const seven = document.querySelector(".seven");
const six = document.querySelector(".six");
const five = document.querySelector(".five");
const four = document.querySelector("four");
const three = document.querySelector("three");
const two = document.querySelector("two");
const one = document.querySelector("one");
const zero = document.querySelector("zero");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");
const numbers = document.querySelectorAll(".number");
const input = document.querySelector(".input");
const operator = document.querySelectorAll(".operator");

let num1 = 0;
let num2 = [];

function inputNumber(buttonNumber) {
    num2.push(buttonNumber);
    input.textContent = num2.join("");
}

for (let i = 0; i < numbers.length - 1; i++) {
    numbers[i].addEventListener("click", function () {
        inputNumber(parseInt(numbers[i].textContent))});
}

dot.addEventListener("click", function() {
    inputNumber(".");
    dot.disabled = true;
});

clear.addEventListener("click", () => {
    num1 = 0;
    num2 = [];
    input.textContent = num1;
    operationNumber = 0;
    dot.disabled = false;
});