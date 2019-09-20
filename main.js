 

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

// const celsiusColor = (x) => {
//    x = toCelsius().value;
//     let result = document.getElementById('output-box').value;
//     if (x < 0) {
//         result.style.color ='#2196f3';
//     } else if (x > 32) {
//         result.style.color ='#d82525';
//     } else {
//         result.style.color = '#219e5f'
//     }

// }



const determineConverter = (e) => {
    const inputValue = document.getElementById('input').value;

    const F = document.getElementById('F');
    const C = document.getElementById('C');
    let radioButton = document.getElementsByClassName('radio-button');
    if (C.checked) {
       printToDom(toCelsius(inputValue), 'output-box')
        
    } else if (F.checked) {
        printToDom(toFahrenheit(inputValue), 'output-box')
    }
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
 //let output = document.getElementById('output-box');
// let x = output;
// console.log(x);
// const C = document.getElementById('C');
// y = output.innerHTML;
//     console.log(y);


//     const changeTextColorCelsius = (x, y) => {
//     let output = document.getElementById('output-box');
//     const F = document.getElementById('F');
//     const C = document.getElementById('C');
//     x = C.checked;
    
//     if (x == true && y > 32) {
        
//         output.style.color = '#d82525';
//     } else if (x == true & y < 0) {
//         output.style.color = '#2196f3';
//     } else {
//         output.style.color = '#219e5f';
//     }
// }
 
    output = document.getElementById('output-box');
    output.addEventListener('DOMContentLoaded', (e) => {
        const F = document.getElementById('F');
        const C = document.getElementById('C');
        let x = C.checked;
        let y = target.event.id;
        console.log(y);

        if (x == true && y > 32) {
            
            output.style.color = '#d82525';
        } else if (x == true & y < 0) {
            output.style.color = '#2196f3';
        } else {
            output.style.color = '#219e5f';
        }
    });
