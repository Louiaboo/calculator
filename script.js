const screen = document.querySelector(".screen");
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

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
        inputNumber(parseInt(numbers[i].textContent))});
}

dot.addEventListener("click", function() {
    inputNumber(".");
    dot.disabled = true;
});

function floatCheck(numArray) {
    if (numArray.includes(".")) {
        return parseFloat(numArray.join(""));
    } else {
        return parseInt(numArray.join(""));
    }
}

function floatToIntCheck(number) {
    if (number % 1 == 0) {
        return Math.floor(number);
    } else {
        return number;
    }
}

let currentOperation;

function operate(operation) {
    if (num2.length > 0) {
        if (operation === "+") {
            num1 = floatToIntCheck(num1 += floatCheck(num2));
        } else if (operation === "-") {
            num1 = floatToIntCheck(num1 -= floatCheck(num2));
        } else if (operation === "*") {
            num1 = floatToIntCheck(num1 *= floatCheck(num2));
        } else if (operation === "/") {
            num1 = floatToIntCheck(num1 /= floatCheck(num2));
        }
    }
    num2 = [];
    console.log(num1);
}

let firstOperation = true;
for (let j = 0; j < operator.length; j++) {
    operator[j].addEventListener("click", () => {
        dot.disabled = false;
        if (firstOperation) {
            num1 = floatCheck(num2);
            num2 = [];
            firstOperation = false;
            currentOperation = operator[j].textContent;
        } else {
            operate(currentOperation);
            currentOperation = operator[j].textContent;
        }
    });
}

equals.addEventListener("click", () => {
    operate(currentOperation);
});

clear.addEventListener("click", () => {
    num1 = 0;
    num2 = [];
    input.textContent = num1;
    firstOperation = true;
    dot.disabled = false;
});