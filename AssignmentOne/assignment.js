
  let fictionalUserInput = 7;

  let result= 18 + fictionalUserInput;

  doStuff()

function doStuff() {
    result = result + 20;
    alert(`This is the result: ${result}`);
    alert(`this was the user's input: ${fictionalUserInput}`);
    result = result - 20;
    alert(`This is the result: ${result}`);
    alert(`this was the user's input: ${fictionalUserInput}`);
    result = result * 1;
    alert(`This is the result: ${result}`);
    alert(`this was the user's input: ${fictionalUserInput}`);
}

