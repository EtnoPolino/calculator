const buttons = document.querySelectorAll('button');
const displayInput = document.querySelectorAll('#display-input');
const displayResult = document.querySelectorAll('#display-result');


console.log(displayInput.textContent)
console.log(displayResult.textContent)
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
   /* console.log(displayInput.innerText); */

   
} // fun de la function write