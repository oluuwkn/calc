

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
   
    if (value === '=') {
        expression = eval(expression).toString();
        display.value = expression;
    } else {
      expression += value;
      display.value = expression;
    }
  });
});

