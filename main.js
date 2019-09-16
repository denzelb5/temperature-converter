 

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}


const toCelsius =  (fahrenheit) => {
     let celsius = (fahrenheit - 32) / 1.8;
     return celsius;
}

const toFahrenheit =  (celsius) => {
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

const button = document.getElementById("convert-button");



// C.addEventListener('click', (event) => {
//     C = inputValue;
//     return C;
// });
    


//  F.addEventListener('click', (event) => {
//     F = event.target.id;
//     return
// });

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
    const inputValue = document.getElementById('input').value;
console.log(inputValue);
    const F = document.getElementById('F');
    const C = document.getElementById('C');
    let radioButton = document.getElementsByClassName('radio-button');
    if (C.checked) {
        printToDom(toCelsius(inputValue), 'output-box')
    } else if (F.checked) {
        printToDom(toFahrenheit(inputValue), 'output-box')
    }
    console.log("radionButton", radioButton, "C", C.checked, "F", F.checked,'inputValue', inputValue);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

