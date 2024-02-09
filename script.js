// Function to store the first operand and operator
let firstOperand = null;
let operator = "";

// Function to display the number on the screen
function displayNumber(num) {
    document.getElementById("screen").value += num;
}

// Function to handle arithmetic operations
function performOperation(op) {
    if(firstOperand === null){
    firstOperand = parseFloat(document.getElementById("screen").value);
    } else {
        // Perform the operation with the stored first operand and the current value on the screen
        let secondOperand = parseFloat(document.getElementById("screen").value);
        switch (operator) {
            case "+":
                firstOperand += secondOperand;
                break;
            case "-":
                firstOperand -= secondOperand;
                break;
            case "*":
                firstOperand *= secondOperand;
                break;
            case "/":
                firstOperand /= secondOperand;
                break;
            case "^":
                firstOperand = Math.pow(firstOperand, secondOperand); // Exponentiation
                break;
            default:
                break;
        }
    }
     one1 = firstOperand;
    operator = op;
    document.getElementById("screen").value = "";
    //document.getElementById("screen2").value = firstOperand;
}

// Function to handle power operation
/*function displayPowerResult() {
    let secondOperand = parseFloat(document.getElementById("screen").value);
    let result = Math.pow(firstOperand, secondOperand);
    // Display the result
    document.getElementById("screen2").value = result;
    // Reset variables
    firstOperand = null;
    operator = "";
}
*/
function calculateSquareRoot() {
    let operand = parseFloat(document.getElementById("screen").value);
    let result = Math.sqrt(operand);
    // Display the result
    document.getElementById("screen2").value = result;
}



// Function to display the result
function displayResult() {
    let secondOperand = parseFloat(document.getElementById("screen").value);
     sec2 = secondOperand;
     document.getElementById("screen2").value = document.getElementById("screen").value;
     
    let result = "";
    switch (operator) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            result = firstOperand / secondOperand;
            
            break;
        case "^":
            result = Math.pow(firstOperand, secondOperand);
        default:
            break;
    }
    document.getElementById("screen").value = "" + sec2 + " " + operator + " " + one1 + " ";
    document.getElementById("screen2").value = result;
}

// Event listeners for arithmetic operations
document.getElementById("plus-button").addEventListener("click", function() {
    performOperation("+");
    
});
document.getElementById("minus-button").addEventListener("click", function() {
    performOperation("-");
});
document.getElementById("multiply-button").addEventListener("click", function() {
    performOperation("*");
});
document.getElementById("divide-button").addEventListener("click", function() {
    performOperation("/");
});
document.getElementById("power-button").addEventListener("click", function() {
    performOperation("^"); // Power button clicked
});
// Event listener for the equal button to trigger calculation
document.getElementById("equal-button").addEventListener("click", function() {
    displayResult();
});

// Function to clear the screen
function displaysong1() {
    document.getElementById("screen").value = "";
}

// Function to clear both inputs
// Function to clear all inputs
function clearAllInputs() {
    firstOperand = null;
    secondOperand = null;
    operator = "";
    document.getElementById("screen").value = "";
    document.getElementById("screen2").value = "";
}

// Event listener for the clear button to trigger clearing all inputs
document.getElementById("clear-button").addEventListener("click", function() {
    clearAllInputs();
});
