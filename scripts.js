let height = document.getElementById("height");
let weight = document.getElementById("weight");
let button = document.getElementById("button");

let score = document.getElementById("score");
let result = document.querySelector(".result");

button.addEventListener("click", function () {
  let newHeight = parseFloat(height.value);
  let newWeight = parseFloat(weight.value);

  newHeight = newHeight / 100;
  let sqrHeight = newHeight * newHeight;
  let bmi = newWeight / sqrHeight;

  score.textContent = bmi.toFixed(2);
  result.style.display = "block";

  let bmiValue = parseFloat(score.textContent);
  if (bmiValue < 18.6) {
    score.style.background = "#ffeaa7";
  } else if (bmiValue < 24.9) {
    score.style.background = "#55efc4";
  } else {
    score.style.background = "#d63031";
  }
});
