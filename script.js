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
  
  if (a === ""){
    a = "0";
  }

  if (b === ""){
    b = "0";
  }
  
  if (typeof a === "string"){
    a = parseFloat(a);
  }
  
  if (typeof b === "string"){
    b = parseFloat(b);
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
    if (b == 0){
      result = "ERROR";
      a = 0;
      b = 0;
      return result;
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
  console.log(typeof resultValueStr + " " + resultValueStr);
}

function continueOperation(){
  resultValueNum = operate(a, b, operatorChosen);
  resultValueStr = resultValueNum.toString();
  a = resultValueStr;
  b = "";
  operatorChosen = "";
  checkMaxDigits();
  updateResult();
}
  
function checkMaxDigits(){
  console.log("a: " + a + " and " + "b: " + b);
  if (resultValueStr.includes(".") && resultValueStr.length > 6){
    resultValueNum = Math.round(resultValueNum * 1000) / 1000;
    resultValueStr = resultValueNum.toString();
  }
  
  if (a.length > 10 || b.length > 10){
    resultValueStr = "ERROR";
    a = "";
    b = "";
    aNum = 0;
    bNum = 0;
    resultValueNum = 0;
    operatorChosen = "";
  }
}

function updateResult(){
  console.log("resultValueStr: " + resultValueStr);
  resultText.textContent = resultValueStr;
  resultQuery.appendChild(resultText);
}

let resultValueStr = "";
let resultValueNum = 0;
let a = "";
let b = "";
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
    if(a.length > 9) return;
    a += "0";
    resultValueStr = a;
  }
    
  else{
    if(b.length > 9) return;
    b += "0";
    resultValueStr = b;
  }
  checkMaxDigits();
  updateResult();
})

btn1.addEventListener("click", () => {
  
  if (operatorChosen === ""){
    if(a.length > 9) return;
    a += "1";
    resultValueStr = a;
  }
  else{
    if(b.length > 9) return;
    b += "1";
    resultValueStr = b;
  }
  checkMaxDigits();
  updateResult();
})

btn2.addEventListener("click", () => {
  if (operatorChosen === ""){
    if(a.length > 9) return;
    a += "2";
    resultValueStr = a;
  }
  else{
    if(b.length > 9) return;
    b += "2";
    resultValueStr = b;
  }
  checkMaxDigits();
  updateResult();
})

btn3.addEventListener("click", () => {
  if (operatorChosen === ""){
    if(a.length > 9) return;
    a += "3";
    resultValueStr = a;
  }
  else{
    if(b.length > 9) return;
    b += "3";
    resultValueStr = b;
  }
  checkMaxDigits();
  updateResult();
})

btn4.addEventListener("click", () => {

  if (operatorChosen === ""){
    if(a.length > 9) return;
    a += "4";
    resultValueStr = a;
  }
  else{
    if(b.length > 9) return;
    b += "4";
    resultValueStr = b;
  }
  checkMaxDigits();
  updateResult();
})

btn5.addEventListener("click", () => {

  if (operatorChosen === ""){
    if(a.length > 9) return;
    a += "5";
    resultValueStr = a;
  }
  else{
    if(b.length > 9) return;
    b += "5";
    resultValueStr = b;
  }
  checkMaxDigits();
  updateResult();
})

btn6.addEventListener("click", () => {

  if (operatorChosen === ""){
    if(a.length > 9) return;
    a += "6";
    resultValueStr = a;
  }
  else{
    if(b.length > 9) return;
    b += "6";
    resultValueStr = b;
  }
  checkMaxDigits();
  updateResult();
})

btn7.addEventListener("click", () => {
  if (operatorChosen === ""){
    if(a.length > 9) return;
    a += "7";
    resultValueStr = a;
  }
  else{
    if(b.length > 9) return;
    b += "7";
    resultValueStr = b;
  }
  checkMaxDigits();
  updateResult();
})

btn8.addEventListener("click", () => {
  if (operatorChosen === ""){
    if(a.length > 9) return;
    a += "8";
    resultValueStr = a;
  }
  else{
    if(b.length > 9) return;
    b += "8";
    resultValueStr = b;
  }
  checkMaxDigits();
  updateResult();
})

btn9.addEventListener("click", () => {
  if (operatorChosen === ""){
    if(a.length > 9) return;
    a += "9";
    resultValueStr = a;
  }
  else{
    if(b.length > 9) return;
    b += "9";
    resultValueStr = b;
  }
  checkMaxDigits();
  updateResult();
})

btnDot.addEventListener("click", () => {
  if (resultValueStr.includes(".")){
    console.log(". found");
    return;
  }

  if (a === ""){
    a += "0";
  }

  if (b === ""){
    b += "0";
  }
  
  if (resultValueStr.includes(".") === false && operatorChosen === ""){
    console.log("adding . to a");
    a += ".";
    updateResult();
    return;
  }

  if (resultValueStr.includes(".") === false){
    console.log("adding . to b")
    b += ".";
    updateResult();
    return;
  }
})

btnClears.addEventListener("click", () => {
  a = "";
  b = "";
  resultValueNum = 0;
  resultValueStr = "";
  operatorChosen = "";
  updateResult();
})

btnDivides.addEventListener("click", () => {
  if (b === ""){
    operatorChosen = "/";
    return;
  }
  
  if (operatorChosen !== "") continueOperation();
  operatorChosen = "/";
})

btnMultiplies.addEventListener("click", () => {
  if (b === ""){
  operatorChosen = "*";
  return;
  }
  if (operatorChosen !== "") continueOperation();
  operatorChosen = "*";
})

btnSubtracts.addEventListener("click", () => {
  if (b === ""){
    operatorChosen = "-";
    return;
  }
  if (operatorChosen !== "") continueOperation();
  operatorChosen = "-";
})

btnAdds.addEventListener("click", () => {
  if (b === ""){
  operatorChosen = "+";
  return;
  }
  if (operatorChosen !== "") continueOperation();
  operatorChosen = "+";
})

btnEquals.addEventListener("click", () => {
  if (b === "" || operatorChosen === ""){
    return;
  }
  resultValueNum = operate(a, b, operatorChosen);
  resultValueStr = resultValueNum.toString();
  debugValues();
  checkMaxDigits();
  updateResult();
  a = resultValueStr;
  b = "";
  operatorChosen = "";
  }
)

