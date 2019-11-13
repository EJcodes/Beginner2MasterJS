const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription)
}

function add() {
    const enteredNumber = getUserNumberInput();
    initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createWriteOutput('+', initialResult, enteredNumber );
}

function subtract(){
    const enteredNumber = paseInt(userInput.value);
    currentResult = currentResult - enteredNumber;
    createWriteOutput('-', initialResult, enteredNumber);
}

function multiply(){
    const enteredNumber = paseInt(userInput.value);
    currentResult = currentResult - enteredNumber;
    createWriteOutput('*', initialResult, enteredNumber);
}

function divide(){
    const enteredNumber = paseInt(userInput.value);
    currentResult = currentResult - enteredNumber;
    createWriteOutput('/', initialResult, enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


