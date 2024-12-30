function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function addToDisplay(value) {
    let display = document.clc.display.value;
    
  
    if (value === '.' && display.includes('.')) {
        return;
    }


    if (isOperator(display.charAt(display.length - 1)) && isOperator(value)) {
        return;
    }

    document.clc.display.value += value;
}

function addOperator(operator) {
    let display = document.clc.display.value;
    
   
    if (isOperator(display.charAt(display.length - 1))) {
        return;
    }

    document.clc.display.value += operator;
}

function calculate() {
    try {
        let result = eval(document.clc.display.value);
        document.clc.display.value = result;
    } catch (error) {
        document.clc.display.value = "Error";
    }
}