const nombres = document.querySelectorAll('.nombre');
const displayLowerScreen = document.querySelector('#display-input');
const displayUpperScreen = document.querySelector('#display-result');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const del = document.querySelector('.delete');
const reset = document.querySelector('.reset');

let lowerNumber = '';
let upperNumber = '';
let previousOperation = '';
let result = null;
let isDotActive = false;

/*--------------------------------------------------------------------------------------------------------------

                                    Events

---------------------------------------------------------------------------------------------------------------*/

nombres.forEach(nombre => {
    nombre.addEventListener('click', writeNumber);
});

operations.forEach(operation => {
    operation.addEventListener('click', operateCalculus);
});

equal.addEventListener('click', equalize);

del.addEventListener('click', deleteNumber);

reset.addEventListener('click', resetNumber);

/*--------------------------------------------------------------------------------------------------------------

                                    function

---------------------------------------------------------------------------------------------------------------*/

function writeNumber(e){
 
    if(e.target.value == '.' && isDotActive == false){
        isDotActive = true;
    }else if (e.target.value == '.' && isDotActive == true) {
        return;
    }
  
    lowerNumber += e.target.value
    displayLowerScreen.innerText = lowerNumber;
}

function operateCalculus(e){
    const operationChosen = e.target.value;
    
    if(lowerNumber == ''){
        return;
    }
    
    isDotActive = false;

    if(previousOperation == '/' && lowerNumber == '0'){
        alert(`You can't divide by 0 !`);
        lowerNumber = '';
        return;
    }else if(upperNumber && lowerNumber && operationChosen){
        operate(result, previousOperation, lowerNumber);
    }else{
        result = parseFloat(lowerNumber);
    }

    upperNumber += ` ${lowerNumber} ${operationChosen} `;
    displayUpperScreen.innerText = upperNumber;
    displayLowerScreen.innerText = result;
    lowerNumber = '';

    console.log('le resultat est : '+result);

    previousOperation = operationChosen;
}

function equalize(){
   let  tabNumber = [];  /* this is just a temp array allowing us to know when we'll be able to add a '.' in a result after clicking '='  */

    if(!lowerNumber || !upperNumber){
        return;
    }

    isDotActive = false;
    
    if(previousOperation === '/' && lowerNumber === '0'){
        alert(`You can't divide by 0 !`);
        lowerNumber = '';
    }else{
        operate(result, previousOperation, lowerNumber);
        upperNumber += ` ${lowerNumber}  = `;
        displayUpperScreen.innerText = upperNumber;
        displayLowerScreen.innerText = result;
        lowerNumber = result;
        upperNumber = '';
        
        tabNumber = [...lowerNumber.toString()];
    
        if(tabNumber.includes('.')){
            isDotActive = true;
        }
    } 
}

function deleteNumber(){
    let tab = []
    if(typeof lowerNumber == 'number'){
        lowerNumber = lowerNumber.toString();
    }

    lowerNumber = lowerNumber.substring(0, lowerNumber.length - 1);      
    tab = [...lowerNumber];

    if(tab.lastIndexOf('.') < 0){
        isDotActive = false;
    }      
    displayLowerScreen.innerText = lowerNumber;  
}

function resetNumber(){
    displayLowerScreen.innerText = '';
    displayUpperScreen.innerText = '';

    lowerNumber = '';
    upperNumber = '';
    previousOperation = '';
    result = null;
    isDotActive = false;
}

/* 1 - Calculate */

function add(a,b){
    result = parseFloat(a)+parseFloat(b);
    return result;
}

function substract(a,b){
    result = parseFloat(a)-parseFloat(b);
    return result;
}

function multiply(a,b){
    result = parseFloat(a)*parseFloat(b);
    return result;
}

function divide(a,b){
    const parseA = parseFloat(a);
    const parseB = parseFloat(b);
    result = parseA/parseB;

    if(parseA % parseB == 0){
        return result;
    }else{
        result = result.toFixed(7)
        return result;
    }
}

function operate(number1, operation, number2){
    if(operation === '+'){
        add(number1, number2);
    }else if (operation === '-'){
        substract(number1, number2);
    } else if(operation === '*'){
        multiply(number1, number2);
    }else if (operation === '/'){
        divide(number1, number2);
    }
}


/*--------------------------------------------------------------------------------------------------------------

                                    Keyboard Support

---------------------------------------------------------------------------------------------------------------*/

window.addEventListener('keydown', writeNumberKeyboard);

function writeNumberKeyboard(evt){
    if(evt.key === '.' || evt.key === '1' || evt.key === '2' || evt.key === '3' || evt.key === '4' || evt.key === '5' || evt.key === '6' || evt.key === '7'
    || evt.key === '8' || evt.key === '9' || evt.key === '0'){
        
        nombres.forEach(nombre => {
            if(nombre.value === evt.key){
                nombre.click();
            }
        });
    }else if(evt.key === '+' || evt.key === '-' || evt.key === '*' || evt.key === '/'){
        operations.forEach(operation => {
           if(operation.value === evt.key){
                operation.click();
           }
        });
    }else if(evt.key === 'Backspace'){
        evt.preventDefault();
        deleteNumber();
    }else if(evt.key === 'Delete'){
        evt.preventDefault();
        resetNumber();
    }else if(evt.key === 'Enter'){
        evt.preventDefault();
        equalize();
    }
} /* fin de fonction */


/*
window.addEventListener('keydown', writeNumberKeyboard);
window.addEventListener('keydown', writeOperationKeyboard);
window.addEventListener('keydown', deleteKeyboard);
window.addEventListener('keydown', equalKeyboard);

function writeNumberKeyboard(evt){

    if(evt.key === '.' || evt.key === '1' || evt.key === '2' || evt.key === '3' || evt.key === '4' || evt.key === '5' || evt.key === '6' || evt.key === '7'
       || evt.key === '8' || evt.key === '9' || evt.key === '0'){

        if(evt.key == '.' && isDotActive == false){
            isDotActive = true;
        }else if (evt.key == '.' && isDotActive == true) {
            return;
        }
      
        lowerNumber += evt.key
        displayLowerScreen.innerText = lowerNumber;
    }
}

function writeOperationKeyboard(evt){
    if(evt.key === '+' || evt.key === '-' || evt.key === '*' || evt.key === '/' ){
        const operationChosen = evt.key;

        if(lowerNumber == ''){
            return;
        }
        isDotActive = false;
    
        if(upperNumber && lowerNumber && operationChosen){
            operate(result, previousOperation, lowerNumber)
        }else{
            result = parseFloat(lowerNumber)
        }
    
        upperNumber += ` ${lowerNumber} ${operationChosen} `;
        displayUpperScreen.innerText = upperNumber;
        displayLowerScreen.innerText = result;
        lowerNumber = '';
    
        previousOperation = operationChosen; 
    }
}

function deleteKeyboard(evt){
    if(evt.key === 'Backspace'){
        deleteNumber();
    }
}

function equalKeyboard(evt){
    if(evt.key === 'Enter'){
        equalize();
    }
}  */