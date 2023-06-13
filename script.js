const screen = document.querySelector(".screen");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");
const number = document.querySelector(".number");
const numbers = document.querySelectorAll(".number");
const input = document.querySelector(".input");
const operator = document.querySelectorAll(".operator");
const logs = document.querySelector(".log");
const backspace = document.querySelector(".backspace");

let num1 = 0;
let num2 = [];

function inputNumber(buttonNumber) {
  num2.push(buttonNumber);
  input.textContent = num2.join("");
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (num2.length > 8) {
      number.disabled = true;
    } else {
      if (num2[0] === 0 && num2.length === 1) {
        num2.shift();
        inputNumber(parseInt(numbers[i].textContent));
      } else {
        inputNumber(parseInt(numbers[i].textContent));
      }
    }
  });
}

dot.addEventListener("click", function () {
  if (num2.length === 0) {
    inputNumber("0");
  }
  inputNumber(".");
  dot.disabled = true;
});

function floatCheck(numArray) {
  if (numArray.includes(".")) {
    return parseFloat(numArray.join(""));
  } else if (numArray.length === 0) {
    return 0;
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
      num1 = floatToIntCheck((num1 += floatCheck(num2)));
    } else if (operation === "-") {
      num1 = floatToIntCheck((num1 -= floatCheck(num2)));
    } else if (operation === "*") {
      num1 = floatToIntCheck((num1 *= floatCheck(num2)));
    } else if (operation === "/") {
      num1 = floatToIntCheck((num1 /= floatCheck(num2)));
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
    number.disabled = false;
    logs.textContent = [num1, " ", currentOperation].join("");
  });
}

equals.addEventListener("click", () => {
  logs.textContent = [num1, " ", currentOperation, " ", num2.join("")].join("");
  operate(currentOperation);
  input.textContent = num1;
});

clear.addEventListener("click", () => {
  num1 = 0;
  num2 = [];
  input.textContent = num1;
  firstOperation = true;
  dot.disabled = false;
  number.disabled = false;
  logs.textContent = "";
});

backspace.addEventListener("click", () => {
  if (num2.length > 0) {
    num2.pop();
    input.textContent = num2.join("");
  }
});
