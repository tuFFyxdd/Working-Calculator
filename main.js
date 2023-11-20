let currentInput = "";
let currentOperator = "";

// allclear function
function clearinput() {
    currentInput = '';
    currentOperator = '';
    document.getElementById('result').value = '';
}
// clear 1 by 1
function clearLast() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}

// number input func.
function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

// operators
function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}
function minus() {
    currentOperator = '-';
    currentInput += currentOperator;
    document.getElementById('result').value = currentInput;
}
function add() {
    currentOperator = '+';
    currentInput += currentOperator;
    document.getElementById('result').value = currentInput;
}
// para lang mag display dun sa input ng "x,÷" instead of "*,/"
function multiply() {
    setOperator("x");
}
function divide() {
    setOperator("÷");
}
function setOperator(operator) {
    currentOperator = operator;
    currentInput += currentOperator;
    document.getElementById('result').value = currentInput;
}

// calculation
function calculate() {
    const expression = currentInput.replace(/x/g, '*').replace(/÷/g, '/');
    const result = eval(expression);
    console.log(result);
    document.getElementById('result').value = result;
    //toStrong, built-in function, read 1 by 1 and evaluate
    currentInput = result.toString();
    currentOperator = '';
}