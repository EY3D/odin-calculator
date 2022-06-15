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

function operate (a, b, operator){
  if (operator == "+"){
    add(a, b);
  }
  else if (operator == "-"){
    minus(a, b);
  }
  else if (operator == "*"){
    multiply(a, b);
  }
  else if (operator == "/"){
    divide(a, b);
  }
}