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
    result = divide(a, b);
    return result;
  }
  else{
    result = 0;
    return result;
  }
}

function checkMaxDigits(){
  resultValue = Math.round(resultValue * 1000) / 1000;
  if (a > 9999999999 || b > 9999999999)
  resultValue = "ERROR";
  //if (resultValue.toString().length > 12)
  //{
  //  resultValue = "ERROR";
  //}
}

function updateResult(){
  resultText.textContent = resultValue;
  resultQuery.appendChild(resultText);
}

let resultValue;
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
  if (operatorChosen === ""){
    a *= 10;
    resultValue = a;
  }
    
  else if (resultValue.includes(".") == true){
    console.log("boom");
  }
    
  else{
    b *= 10;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn1.addEventListener("click", () => {
  if (operatorChosen === ""){
    a *= 10;
    a += 1;
    resultValue = a;
  }
  else{
    b *= 10;
    b += 1;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn2.addEventListener("click", () => {
  if (operatorChosen === ""){
    a *= 10;
    a += 2;
    resultValue = a;
  }
  else{
    b *= 10;
    b += 2;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn3.addEventListener("click", () => {
  if (operatorChosen === ""){
    a *= 10;
    a += 3;
    resultValue = a;
  }
  else{
    b *= 10;
    b += 3;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn4.addEventListener("click", () => {
  if (operatorChosen === ""){
    a *= 10;
    a += 4;
    resultValue = a;
  }
  else{
    b *= 10;
    b += 4;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn5.addEventListener("click", () => {
  if (operatorChosen === ""){
    a *= 10;
    a += 5;
    resultValue = a;
  }
  else{
    b *= 10;
    b += 5;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn6.addEventListener("click", () => {
  if (operatorChosen === ""){
    a *= 10;
    a += 6;
    resultValue = a;
  }
  else{
    b *= 10;
    b += 6;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn7.addEventListener("click", () => {
  if (operatorChosen === ""){
    a *= 10;
    a += 7;
    resultValue = a;
  }
  else{
    b *= 10;
    b += 7;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn8.addEventListener("click", () => {
  if (operatorChosen === ""){
    a *= 10;
    a += 8;
    resultValue = a;
  }
  else{
    b *= 10;
    b += 8;
    resultValue = b;
  }
  checkMaxDigits();
  updateResult();
})

btn9.addEventListener("click", () => {
  if (operatorChosen === ""){
    a *= 10;
    a += 9;
    resultValue = a;
  }
  else{
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
  operatorChosen = "/";
})

btnMultiplies.addEventListener("click", () => {
  operatorChosen = "*";
})

btnSubtracts.addEventListener("click", () => {
  operatorChosen = "-";
})

btnAdds.addEventListener("click", () => {
  operatorChosen = "+";
})

btnEquals.addEventListener("click", () => {
  resultValue = operate(a, b, operatorChosen);
  a = resultValue;
  b = 0;
  operatorChosen = "";
  checkMaxDigits();
  updateResult();
  resultValue = 0;
  }
)

