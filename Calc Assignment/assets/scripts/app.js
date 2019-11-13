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

}

function divide(){

}


addBtn.addEventListener('click', add);


