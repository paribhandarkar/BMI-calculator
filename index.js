const btnEl = document.querySelector(".btn");
const outputEl = document.getElementById("output-display");
const conditionEl = document.getElementById("condition");

function calculateBMI() {
  const height = +document.getElementById("height").value;
  const weight = +document.getElementById("weight").value;
  const heightInMeter = height / 100;

  let BMIvalue = 0;
  BMIvalue = weight / heightInMeter ** 2;
  outputEl.value = BMIvalue.toFixed(2);

  if (BMIvalue < 18.5) {
    conditionEl.innerText = "Under weight";
  } else if (BMIvalue >= 18.5 && BMIvalue <= 24.9) {
    conditionEl.innerText = "Normal weight";
  } else if (BMIvalue >= 25 && BMIvalue <= 29.9) {
    conditionEl.innerText = "Overweight";
  } else if (BMIvalue >= 30) {
    conditionEl.innerText = "Obesity";
  }
}
