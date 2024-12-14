const display = document.querySelector(".empty-box");
const buttons = document.querySelectorAll(".box, .box-zero");
let currentInput = "";
let operator = '';
let firstOperand = null;
buttons.forEach(button => {
    button.addEventListener("click",() =>{
        const value = button.textContent;
          if(value == "AC"){
            currentInput ="";
            operator = "";
            firstOperand = null;
            display.textContent = "";
          } 
          else if(value === "DEL"){
            currentInput = currentInput.slice(0,-1);
            display.textContent = currentInput;
          }else if("+-*/%".includes(value)){
          if(currentInput){
            firstOperand = parseFloat(currentInput);
            operator = value;
            currentInput = "";
          }
        }else if(value === "="){
            if(firstOperand !== null && operator && currentInput){
                const secondOperand = parseFloat(currentInput);
                let result = 0;
                switch(operator) {
                    case "+":
                        result = firstOperand + secondOperand;
                        break;
                    case "-":
                        result = firstOperand - secondOperand;
                        break;
                    case "*":
                        result =  firstOperand * secondOperand; 
                        break;
                    case "/":
                        result = firstOperand / secondOperand;   
                        break;
                    case "%":
                        result = firstOperand % secondOperand;  
                        break;           
                }
                display.textContent = result;
                currentInput = result.toString();
                operator = "";
                firstOperand = null;
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});