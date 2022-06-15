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
    return "failed";
  }
}

let c = 1;
let d = 2;
operate(c,d, "+");