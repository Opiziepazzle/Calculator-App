let memory = 0; // Memory storage
const display = document.getElementById('display');

function clearDisplay() {
  display.innerText = '0';
}

function clearLast() {
  const text = display.innerText;
  display.innerText = text.length > 1 ? text.slice(0, -1) : '0';
}

function appendToDisplay(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function calculate() {
  try {
    const result = eval(display.innerText.replace('√', 'Math.sqrt'));
    display.innerText = result;
  } catch (error) {
    display.innerText = 'Error';
  }
}

// Memory Functions
function memoryAdd() {
  memory += parseFloat(display.innerText) || 0;
  display.innerText = '0';
}

function memorySubtract() {
  memory -= parseFloat(display.innerText) || 0;
  display.innerText = '0';
}

function memoryRecall() {
  display.innerText = memory;
}