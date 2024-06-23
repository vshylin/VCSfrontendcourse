document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('input[type="text"]');
    let currentInput = '';
    let firstOperand = null;
    let operator = null;
    
    function updateDisplay(value) {
        display.value = value;
    }
    
    function clearCalculator() {
        currentInput = '';
        firstOperand = null;
        operator = null;
        updateDisplay('');
    }
    
    function handleNumberClick(value) {
        currentInput += value;
        updateDisplay(currentInput);
    }
    
    function handleOperatorClick(value) {
        if (currentInput !== '') {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            } else {
                compute();
            }
            operator = value;
            currentInput = '';
        }
    }
    
    function compute() {
        const secondOperand = parseFloat(currentInput);
        let result = 0;
        
        switch(operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }
        
        firstOperand = result;
        updateDisplay(result);
    }
    
    // Event listeners for number buttons
    document.querySelectorAll('.num-button').forEach(button => {
        button.addEventListener('click', () => {
            handleNumberClick(button.value);
        });
    });
    
    // Event listeners for operator buttons
    document.querySelectorAll('.op-button').forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === 'c') {
                clearCalculator();
            } else if (button.value === '=') {
                compute();
                operator = null;
                currentInput = '';
            } else {
                handleOperatorClick(button.value);
            }
        });
    });
});