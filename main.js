 

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}


const toCelsius =  (fahrenheit) => {
     let celsius = (fahrenheit - 32) / 1.8;
     return Math.floor(celsius);
}

const toFahrenheit =  (celsius) => {
    let fahrenheit = (celsius * 1.8) + 32;
    return Math.floor(fahrenheit);
}

const button = document.getElementById("convert-button");




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

const buttonGroup = document.getElementsByClassName('buttons');
const findButtonArray = (buttonArr) => {
    for (let i = 0; i < buttonArr.length; i++) {
        let buttons = buttonArr[i];
        buttons.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("convert-button").click();
            }
        })
    }

}
findButtonArray(buttonGroup)