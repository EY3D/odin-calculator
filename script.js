function add(a , b){
  return a+b;
}

function minus(a, b){
  return a-b;
}

function multiply(a, b){
  return a*b;
}

function divide(a, b){
  return a/b;
}

function operate(a, b, operator){
  let result;
  
  if (typeof a === "string"){
    parseFloat(a);
  }
  
  if (typeof b === "string"){
    parseFloat(b);
  }
  
  if (operator == "+"){
    result = add(a, b);
    return result;
  }
  else if (operator == "-"){
    result = minus(a, b);
    return result;
  }
  else if (operator == "*"){
    result = multiply(a, b);
    return result;
  }
  else if (operator == "/"){
    if (b === 0){
      result = "ERROR";
      a = 0;
      b = 0;
    }
    result = divide(a, b);
    return result;
  }
  else{
    result = 0;
    return result;
  }
}

function debugValues(){
  console.log(typeof a + " " + a);
  console.log(operatorChosen);
  console.log(typeof b + " " + b);
  console.log(typeof resultValue + " " + resultValue);
}

function continueOperation(){
  if (typeof resultValue === "string"){
      parseFloat(resultValue);
      console.log("parsed float: "+ resultValue);
    }
  resultValue = operate(a, b, operatorChosen);
  a = resultValue;
  b = 0;
  operatorChosen = "";
  checkMaxDigits();
  updateResult();
}
  
function checkMaxDigits(){
  if (typeof resultValue === "number"){
    resultValue = Math.round(resultValue * 1000) / 1000;
    if (a > 9999999999 || b > 9999999999){
    resultValue = "ERROR";
    a = 0;
    b = 0;
    operatorChosen = "";
    }
  }

  if (typeof resultValue === "string"){
    if (resultValue.length > 11){
    resultValue = "ERROR";
    a = 0;
    b = 0;
    operatorChosen = "";
    }
  }
}

function updateResult(){
  resultText.textContent = resultValue;
  resultQuery.appendChild(resultText);
}

let resultValue = 0;
let a = 0;
let b = 0;
let operatorChosen = "";

const resultText = document.createElement("span");
const resultQuery = document.querySelector("#result");

const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btnDot = document.querySelector("#btnDot");

const btnClears = document.querySelector("#clears");
const btnDivides = document.querySelector("#divides");
const btnMultiplies = document.querySelector("#multiplies");
const btnSubtracts = document.querySelector("#subtracts");
const btnAdds = document.querySelector("#adds");
const btnEquals = document.querySelector("#equals");

btn0.addEventListener("click", () => {
  if (typeof resultValue === "string" && operatorChosen === ""){
    resultValue += "0";
    resultValue = parseFloat(resultValue);
    checkMaxDigits();
    updateResult();
    return;
  }

  if (operatorChosen === ""){
    a *= 10;
    resultValue = a;
  }
    
  else{
    if (typeof resultValue === "string"){
      parseFloat(resultValue);
    }
    b *= 10;
    resultValue = b;
  }
  
  checkMaxDigits();
  updateResult();
})

btn1.addEventListener("click", () => {
  if (typeof resultValue === "string" && operatorChosen === ""){
    resultValue += "1";
    resultValue = parseFloat(resultValue);
    checkMaxDigits();
    updateResult();
    return;
  }
  
  if (operatorChosen === ""){
    a *= 10;
    a += 1;
    resultValue = a;
  }
  else{
    if (typeof resultValue === "string"){
      parseFloat(resultValue);
    }
    b *= 10;
    b += 1;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn2.addEventListener("click", () => {
  if (typeof resultValue === "string" && operatorChosen === ""){
    resultValue = resultValue += "2";
    parseFloat(resultValue);
    checkMaxDigits();
    updateResult();
    return;
  }

  if (operatorChosen === ""){
    a *= 10;
    a += 2;
    resultValue = a;
  }
  else{
    if (typeof resultValue === "string"){
      parseFloat(resultValue);
    }
    b *= 10;
    b += 2;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn3.addEventListener("click", () => {
  if (typeof resultValue === "string" && operatorChosen === ""){
    resultValue += "3";
    parseFloat(resultValue);
    checkMaxDigits();
    updateResult();
    return;
  }
  
  if (operatorChosen === ""){
    a *= 10;
    a += 3;
    resultValue = a;
  }
    
  else{
    if (typeof resultValue === "string"){
      parseFloat(resultValue);
    }
    b *= 10;
    b += 3;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn4.addEventListener("click", () => {
  if (typeof resultValue === "string" && operatorChosen === ""){
    resultValue += "4";
    checkMaxDigits();
    updateResult();
    return;
  }
  
  if (operatorChosen === ""){
    a *= 10;
    a += 4;
    resultValue = a;
  }
  else{
    if (typeof resultValue === "string"){
      parseFloat(resultValue);
    }
    b *= 10;
    b += 4;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn5.addEventListener("click", () => {
  if (typeof resultValue === "string" && operatorChosen === ""){
    resultValue += "5";
    checkMaxDigits();
    updateResult();
    return;
  }
  
  if (operatorChosen === ""){
    a *= 10;
    a += 5;
    resultValue = a;
  }
  else{
    if (typeof resultValue === "string"){
      parseFloat(resultValue);
    }
    b *= 10;
    b += 5;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn6.addEventListener("click", () => {
  if (typeof resultValue === "string" && operatorChosen === ""){
    resultValue += "6";
    checkMaxDigits();
    updateResult();
    return;
  }
  
  if (operatorChosen === ""){
    a *= 10;
    a += 6;
    resultValue = a;
  }
  else{
    if (typeof resultValue === "string"){
      parseFloat(resultValue);
    }
    b *= 10;
    b += 6;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn7.addEventListener("click", () => {
  if (typeof resultValue === "string" && operatorChosen === ""){
    resultValue += "7";
    checkMaxDigits();
    updateResult();
    return;
  }
  
  if (operatorChosen === ""){
    a *= 10;
    a += 7;
    resultValue = a;
  }
  else{
    if (typeof resultValue === "string"){
      parseFloat(resultValue);
    }
    b *= 10;
    b += 7;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn8.addEventListener("click", () => {
  if (typeof resultValue === "string" && operatorChosen === ""){
    resultValue += "1";
    checkMaxDigits();
    updateResult();
    return;
  }
  
  if (operatorChosen === ""){
    a *= 10;
    a += 8;
    resultValue = a;
  }
  else{
    if (typeof resultValue === "string"){
      parseFloat(resultValue);
    }
    b *= 10;
    b += 8;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn9.addEventListener("click", () => {
  if (typeof resultValue === "string" && operatorChosen === ""){
    resultValue += "9";
    checkMaxDigits();
    updateResult();
    return;
  }
  
  if (operatorChosen === ""){
    a *= 10;
    a += 9;
    resultValue = a;
  }
  else{
    if (typeof resultValue === "string"){
      parseFloat(resultValue);
    }
    b *= 10;
    b += 9;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btnDot.addEventListener("click", () => {
  if (typeof resultValue === "number"){
    resultValue.toString();
    resultValue += "."
    updateResult();
  }
  else{
    return;
  }
})

btnClears.addEventListener("click", () => {
  a = 0;
  b = 0;
  resultValue = 0;
  operatorChosen = "";
  updateResult();
})

btnDivides.addEventListener("click", () => {
  if (operatorChosen !== "") continueOperation();
  operatorChosen = "/";
})

btnMultiplies.addEventListener("click", () => {
  if (operatorChosen !== "") continueOperation();
  operatorChosen = "*";
})

btnSubtracts.addEventListener("click", () => {
  if (operatorChosen !== "") continueOperation();
  operatorChosen = "-";
})

btnAdds.addEventListener("click", () => {
  if (operatorChosen !== "") continueOperation();
  operatorChosen = "+";
})

btnEquals.addEventListener("click", () => {
  resultValue = operate(a, b, operatorChosen);
  debugValues();
  a = resultValue;
  b = 0;
  operatorChosen = "";
  checkMaxDigits();
  updateResult();
  resultValue = 0;
  }
)

