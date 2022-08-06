// https://calculator.swiftutors.com/capacitive-reactance-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const capacitiveReactanceRadio = document.getElementById('capacitiveReactanceRadio');
const frequencyRadio = document.getElementById('frequencyRadio');
const capacitanceRadio = document.getElementById('capacitanceRadio');

let capacitiveReactance;
const PI = Math.PI;
let frequency = v1;
let capacitance = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

capacitiveReactanceRadio.addEventListener('click', function() {
  variable1.textContent = '(f) Frequency (hertz)';
  variable2.textContent = '(C) Capacitance (farad)';
  frequency = v1;
  capacitance = v2;
  result.textContent = '';
});

frequencyRadio.addEventListener('click', function() {
  variable1.textContent = '(Xc) Capacitive Reactance (ohm)';
  variable2.textContent = '(C) Capacitance (farad)';
  capacitiveReactance = v1;
  capacitance = v2;
  result.textContent = '';
});

capacitanceRadio.addEventListener('click', function() {
  variable1.textContent = '(Xc) Capacitive Reactance (ohm)';
  variable2.textContent = '(f) Frequency (hertz)';
  capacitiveReactance = v1;
  frequency = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(capacitiveReactanceRadio.checked)
    result.textContent = `Capacitive Reactance = ${computeCapacitiveReactance()} ohm`;

  else if(frequencyRadio.checked)
    result.textContent = `Frequency = ${computeFrequency().toFixed(2)} hertz`;

  else if(capacitanceRadio.checked)
    result.textContent = `Capacitance = ${computeCapacitance().toFixed(2)} farad`;
})

// calculation

function computeCapacitiveReactance() {
  return 1 / (2 * PI * Number(frequency.value) * Number(capacitance.value));
}

function computeFrequency() {
  return 1 / (2 * PI * Number(capacitiveReactance.value) * Number(capacitance.value));
}

function computeCapacitance() {
  return 1 / (2 * PI * Number(frequency.value) * Number(capacitiveReactance.value));
}