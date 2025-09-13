const mainHeading = document.createElement("h1");
mainHeading.textContent = "Calculate your body mass index (BMI)";
document.body.append(mainHeading);

mainHeading.style.marginTop = "70px";
mainHeading.style.textAlign = "center";

const isAdult = document.createElement("h2");
isAdult.textContent = "Are You an Adult (18+)?";
document.body.append(isAdult);

isAdult.style.margin = "120px 0px 40px 0px";
isAdult.style.textAlign = "center";


const btnsContainer = document.createElement("div");
document.body.append(btnsContainer);

btnsContainer.style.display = "flex";
btnsContainer.style.justifyContent = "center";
btnsContainer.style.gap = "20px"

const adultBtn = document.createElement("button");
adultBtn.textContent = "Yes, I am 18 or Above";
btnsContainer.append(adultBtn);

adultBtn.style.width = "220px";
adultBtn.style.height = "40px";
adultBtn.style.borderRadius = "15px";
adultBtn.style.fontWeight = "bold";
adultBtn.style.fontSize = "large"

const underageBtn = document.createElement("button");
underageBtn.textContent = "No, I am under 18";
btnsContainer.append(underageBtn);

underageBtn.style.width = "220px";
underageBtn.style.height = "40px";
underageBtn.style.borderRadius = "15px";
underageBtn.style.fontWeight = "bold";
underageBtn.style.fontSize = "large";

underageBtn.addEventListener("click", ()=> {
  document.body.innerHTML = "";

  const underageMessage = document.createElement("p");
  underageMessage.textContent = `
  This BMI calculator is designed for adults (18 years and older). 
  For children and teenagers, BMI is calculated differently. 
  Please consult a pediatric or health professional for accurate guidance.
  `;
  document.body.append(underageMessage);
});

function bmiCalculator (weight, height) {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

    switch (true) {
      case (bmi < 18.5):
        return `Your BMI is ${bmi}<br>You're in the underweight range`;
        break;
      case (bmi >= 18.5 && bmi <= 24.9):
        return `Your BMI is ${bmi}<br>You're in the healthy weight range`;
        break;
      case (bmi >= 25 && bmi <= 29.9):
        return `Your BMI is ${bmi}<br>You're in the overweight range`;
        break;
      case (bmi >= 30 && bmi <= 39.9):
        return `Your BMI is ${bmi}<br>You're in the obese range`;
        break;
      case (bmi >= 40):
        return `Your BMI is ${bmi}<br>You're in the severely obese range`;
    }

    return bmi;

}

adultBtn.addEventListener("click", () => {
    document.body.innerHTML = "";
    document.body.append(mainHeading);

    const nextPage1 = document.createElement("h2");
    nextPage1.textContent = "Enter Your Height (cm):";
    document.body.append(nextPage1);

    nextPage1.style.margin = "120px 0px 10px 0px";
    nextPage1.style.textAlign = "center";

    const heightInput = document.createElement("input");
    heightInput.value = "";
    heightInput.type = "number";
    heightInput.placeholder = "Height in cm";
    heightInput.min = "139.7";
    heightInput.max = "243.8";
    document.body.append(heightInput);

    heightInput.style.display = "block";
    heightInput.style.margin = "20px auto";
    heightInput.style.width = "100px";
    heightInput.style.height = "30px";
    heightInput.style.borderRadius = "5px"
    heightInput.style.fontSize = "small";
    
    const heightBtn = document.createElement("button");
    heightBtn.textContent = "Continue";
    document.body.append(heightBtn);

    heightBtn.style.display = "block";
    heightBtn.style.margin = "150px auto";
    heightBtn.style.width = "220px";
    heightBtn.style.height = "40px";
    heightBtn.style.borderRadius = "15px";
    heightBtn.style.fontWeight = "bold";
    heightBtn.style.fontSize = "large";

    heightBtn.addEventListener("click", ()=> {
        if (heightInput.value < 139.7 || heightInput.value > 243.8) {
          alert("Enter a height between 139.7 cm and 243.8 cm");
        }
        document.body.innerHTML = "";
        document.body.append(mainHeading);

        const nextPage2 = document.createElement("h2");
        nextPage2.textContent = "Enter Your Weight (kg):";
        document.body.append(nextPage2);

        nextPage2.style.margin = "120px 0px 10px 0px";
        nextPage2.style.textAlign = "center";

        const weighttInput = document.createElement("input");
        weighttInput.value = "";
        weighttInput.type = "number";
        weighttInput.placeholder = "Weight in kg";
        weighttInput.min = "25.4";
        weighttInput.max = "317.5";
        document.body.append(weighttInput);

        weighttInput.style.display = "block";
        weighttInput.style.margin = "20px auto";
        weighttInput.style.width = "100px";
        weighttInput.style.height = "30px";
        weighttInput.style.borderRadius = "5px";
        weighttInput.style.fontSize = "small";

        const calculateBtn = document.createElement("button");
        calculateBtn.textContent = "Calculate";
        document.body.append(calculateBtn);

        calculateBtn.style.display = "block";
        calculateBtn.style.margin = "150px auto";
        calculateBtn.style.width = "220px";
        calculateBtn.style.height = "40px";
        calculateBtn.style.borderRadius = "15px";
        calculateBtn.style.fontWeight = "bold";
        calculateBtn.style.fontSize = "large";

        calculateBtn.addEventListener("click", () => {
            document.body.innerHTML = "";

            const result = document.createElement("p");
            result.innerHTML = `${bmiCalculator(weighttInput.value, heightInput.value)}`;
            document.body.append(result);
        })

    });
    
});


