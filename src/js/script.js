const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let expression = '';
let isResultShown = false; 

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'Del') {
      expression = '';
      display.value = '';
      isResultShown = false; 
    } 
    else if (value === '=') {
      try {
        expression = eval(expression).toString();
        display.value = expression;
        isResultShown = true; 
      } catch {
        display.value = "Ошибка";
        expression = '';
      }
    } 
    else {
      if (!isResultShown) { 
        expression += value;
        display.value = expression;
      }
    }
  });
});