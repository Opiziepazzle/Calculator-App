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

function toggleSign() {
  const currentValue = display.innerText;

  //check if the display have a valid number
  if (currentValue !== "0" && currentValue !== "") {
    //Toggle the sign
    if (currentValue.startsWith("-")) {
      display.innerText = currentValue.substring(1); //Remove the nagative sign
    } else {
      display.innerText = "-" + currentValue; //Add the negative sign
    }
  }
}