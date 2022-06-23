const buttons = document.querySelectorAll('button');
const displayInput = document.getElementById('display-input');
const displayResult = document.getElementById('display-result');

/*
console.log(displayInput.innerText)
console.log(displayResult.innerText) */
/*-------------------------------------------------------------------------------------------------------------
                                    AddeventListeners
-------------------------------------------------------------------------------------------------------------*/

buttons.forEach((button) =>{
    button.addEventListener('click', writeCalculus);
});


/*-------------------------------------------------------------------------------------------------------------
                                    functions
-------------------------------------------------------------------------------------------------------------*/

function writeCalculus(e){
   switch(e.target.innerText){
    case 'DEL' : 
    displayInput.innerText = displayInput.innerText.substring(0, displayInput.innerText.length - 1);
        break;
    case '+' : 
        console.log('+');
        break;  
    case '-' : 
        console.log('-');
        break;
    case 'x' : 
        console.log('x');
        break;
    case '/' : 
        console.log('/');
        break;
    case '.' : 
        console.log('.');
        break;      
    case 'RESET' :
        displayInput.innerText = '';
        displayResult.innerText = '';
        break;
    case '=' :
        console.log('=');
        break;
    default:
        displayInput.innerText += e.target.innerText;

   } // fin swtich
   
} // fun de la function write