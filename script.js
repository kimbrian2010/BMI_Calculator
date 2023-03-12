const btnEl = document.getElementById("btn");
const BMIval = document.getElementById("bmi-value");
const BMIinfo = document.getElementById("result-info");

function calculateBMI() {
    const heightVal = document.getElementById("height").value / 100; //divide by 100 to convert in meters
    const weightVal = document.getElementById("weight").value;

    const BMI = (weightVal / (heightVal * heightVal));
    BMIval.value = BMI;

    if (BMI < 18.5) {
        BMIinfo.innerText = "Underweight";
    } else if (BMI >= 18.5 && BMI <= 25) {
        BMIinfo.innerText = "Normal weight";
    } else if (BMI > 25 && BMI <= 30) {
        BMIinfo.innerText = "Overweight";
    } else
        BMIinfo.innerText = "Obesity";

    //console.log("Button clicked", `Height: ${heightVal} Weight: ${weightVal} BMI is: ${BMI}`);
}

btnEl.addEventListener("click", calculateBMI);