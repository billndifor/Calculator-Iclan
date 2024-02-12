function addToInput(value) {
    document.getElementById('screen').value += value;
  }

  function allclear() {
    document.getElementById('screen').value = '';
    document.getElementById('screen2').value = 0;
  }

  function clearInput() {
    document.getElementById('screen').value = '';
  }

  function calculate() {
    var input = document.getElementById('screen').value;
    try {
      var result = eval(input);
      document.getElementById('screen2').value = result;
    } catch (e) {
      document.getElementById('screen2').value = 'Error';
    }

  }

  function calculateSqrt() {
    var input = document.getElementById('screen').value;
    try {
      var result = Math.sqrt(eval(input));
      document.getElementById('screen2').value = result;
    } catch (e) {
      document.getElementById('screen2').value = 'Error';
    }
}

function toggleSign() {
    var input = document.getElementById('screen');
    var currentValue = input.value;
    if (currentValue.charAt(0) === '-') {
      input.value = currentValue.slice(1);
    } else {
      input.value = '-' + currentValue;
    }
  }

  function addDecimal() {
    var input = document.getElementById('screen');
    var currentValue = input.value;
    if (currentValue.indexOf('.') === -1) {
      input.value += '.';
    }
  }