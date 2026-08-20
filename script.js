let joinbtn=document.getElementById("joinbtn");
joinbtn.addEventListener("click",function(){
    alert("Welcome to Fitness guide with Sunny!");
})
function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("bmi-result");

    if (height === "" || weight === "") {
        result.innerHTML = "Please enter height and weight.";
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } 
    else if (bmi < 25) {
        category = "Normal Weight";
    } 
    else if (bmi < 30) {
        category = "Overweight";
    } 
    else {
        category = "Obese";
    }

    result.innerHTML = `Your BMI is ${bmi}<br>${category}`;
}