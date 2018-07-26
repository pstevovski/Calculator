// Defined variables.
const inputField = document.getElementById("inputField");
const outputField = document.getElementById("outputField");
const numberClicked = document.getElementById("numberClicked");

// Set the output field to show "0" on page load.
outputField.innerHTML = "0";

// On key release(keyup) from input field, trigger the function.
inputField.addEventListener("keyup", function (e){
    let value = this.value;
    // If the key pressed is "enter" or "numpad enter" and there is value in the input field..
    if((e.code === "Enter" || e.code === "NumpadEnter") && value) {
        let sum = eval(value);
        if (outputField.innerHTML === "0"){
            outputField.innerHTML = "";
        }
        inputField.value = sum;
    } else {
        outputField.innerHTML = value;
    }

    // Show the pressed key above the calculator.
    numberClicked.classList.add("active");
    numberClicked.innerHTML = e.key;
    setTimeout(() => {
        numberClicked.classList.remove("active");
    }, 200);

})
function calc(item) {

    // Show the clicked key value above the calculator.
    numberClicked.classList.add("active");
    numberClicked.innerHTML = item.innerHTML;
    setTimeout(() => {
        numberClicked.classList.remove("active");
    }, 200);

    const math = item.innerHTML;
    if ( math === "=") {
        // Make the calculation.
        const value = inputField.value;
        let sum = eval(value);
        inputField.value = sum;
    } else if ( math === "AC"){
        // All clear.
        outputField.innerHTML = "0";
        inputField.value = "";
    } else if ( math === "C") {
        // Delete the last number in the input field.
        const test = document.getElementById("inputField").value;
        document.getElementById("inputField").value=test.substring(0,test.length-1);
    }
    else {
        // Add numbers in the input field.
        inputField.value += math;
        const value = inputField.value;
        outputField.innerHTML = value;
    }
}

// Get the sqaure root of a number.
function squareRoot(sqr){
    // Show the clicked key value above the calculator.
    numberClicked.classList.add("active");
    numberClicked.innerHTML = sqr.innerHTML;
    setTimeout(() => {
        numberClicked.classList.remove("active");
    }, 200);
    
    let squareRoot = document.getElementById("inputField").value;
    // Math.sqrt(squareRoot);
    inputField.value = Math.sqrt(squareRoot);
    outputField.innerHTML = "";
    outputField.innerHTML += "√"+squareRoot;
    console.log(Math.sqrt(squareRoot));
}
// Pi number.
function pi(pi){
    outputField.innerHTML = "";
    outputField.innerHTML += "π";
    inputField.value += Math.PI;

    // Show the clicked key value above the calculator.
    numberClicked.classList.add("active");
    numberClicked.innerHTML = pi.innerHTML;
    setTimeout(() => {
        numberClicked.classList.remove("active");
    }, 200);
}