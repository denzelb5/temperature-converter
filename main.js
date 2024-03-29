 

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

const changeColor = (temp, scale) => {
   // inputValue = document.getElementById('input').value;
    result = document.getElementById('output-box');
    //document.getElementsByClassName('radio-button');
    if (scale === 'C') {
        console.log(temp)
        switch(true) {
            case temp < 0:
                    result.className ='text-primary';
                break;
            case temp > 32:
                    result.className = 'text-danger';
                break;
            default:
                    result.className = 'text-success';
                break;
        }
    } else {
        switch(true) {
            case temp < 32:
                    result.className = 'text-primary';
                break;
            case temp > 90:
                    result.className = 'text-danger';
                break;
            default:
                    result.className = 'text-success';
                break;

        }
    }
}





const determineConverter = (e) => {
    const inputValue = document.getElementById('input').value;
    let result = document.getElementById('output-box');
    const F = document.getElementById('F');
    const C = document.getElementById('C');
    let radioButton = document.getElementsByClassName('radio-button');
    if (C.checked) {
        printToDom(toCelsius(inputValue) + ' C°', 'output-box')
        changeColor(toCelsius(inputValue), 'C')
    } else if (F.checked) {
        printToDom(toFahrenheit(inputValue) + ' F°', 'output-box')
        changeColor(toFahrenheit(inputValue), 'F')
    }
}






// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

document.getElementById('clear-button').addEventListener('click', () => {
    printToDom('', 'output-box')
})

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
// findButtonArray(buttonGroup)
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
 
    // const F = document.getElementById('F');
    //     const C = document.getElementById('C');
    //     result = document.getElementById('output-box').value;
    // if(scale === 'C') {
    //     switch(result) {
    //         case result < 0:
    //             result.style.color ='#2196f3';
    //             break;
    //         case result > 32:
    //             result.style.color ='#d82525';
    //             break;
    //         default:
    //             result.style.color = '#219e5f';

    //     }
    // } else {}
    // if(scale === 'C') {
    //     switch(result) {
    //         case result < 0:
    //             result.style.color ='#2196f3';
    //             break;
    //         case result > 32:
    //             result.style.color ='#d82525';
    //             break;
    //         default:
    //             result.style.color = '#219e5f';

    //     }
    // } else {}
        
    // });
