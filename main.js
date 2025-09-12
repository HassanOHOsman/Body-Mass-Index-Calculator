const mainHeading = document.createElement("h1");
mainHeading.textContent = "Calculate your body mass index (BMI)";
document.body.append(mainHeading);

mainHeading.style.marginTop = "70px";
mainHeading.style.textAlign = "center";

const isAdult = document.createElement("h2");
isAdult.textContent = "Are You an Adult (18+)?";
document.body.append(isAdult);

isAdult.style.marginTop = "50px";
isAdult.style.textAlign = "center";

const btnsContainer = document.createElement("div");
document.body.append(btnsContainer);

btnsContainer.style.display = "flex";
btnsContainer.style.justifyContent = "center";
btnsContainer.style.gap = "20px"

const adultBtn = document.createElement("button");
adultBtn.textContent = "Yes, I am 18 or Above";
btnsContainer.append(adultBtn);

adultBtn.style.width = "200px";
adultBtn.style.height = "40px";
adultBtn.style.borderRadius = "15px";

const underageBtn = document.createElement("button");
underageBtn.textContent = "No, I am under 18";
btnsContainer.append(underageBtn);

underageBtn.style.width = "200px";
underageBtn.style.height = "40px";
underageBtn.style.borderRadius = "15px";

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

    const nextPage1 = document.createElement("h1");
    nextPage1.textContent = "Enter Your Height (cm):";
    document.body.append(nextPage1);

    const heightInput = document.createElement("input");
    heightInput.value = "";
    heightInput.type = "number";
    heightInput.placeholder = "Enter Height in cm";
    heightInput.min = "139.7";
    heightInput.max = "243.8";
    document.body.append(heightInput);

    const heightBtn = document.createElement("button");
    heightBtn.textContent = "Continue";
    document.body.append(heightBtn);

    heightBtn.addEventListener("click", ()=> {
        if (heightInput.value < 139.7 || heightInput.value > 243.8) {
          alert("Enter a height between 139.7 cm and 243.8 cm");
        }
        document.body.innerHTML = "";

        const nextPage2 = document.createElement("h1");
        nextPage2.textContent = "Enter Your Weigh (kg):";
        document.body.append(nextPage2);

        const weighttInput = document.createElement("input");
        weighttInput.value = "";
        weighttInput.type = "number";
        weighttInput.placeholder = "Enter Height in cm";
        weighttInput.min = "25.4";
        weighttInput.max = "317.5";
        document.body.append(weighttInput);

        const calculateBtn = document.createElement("button");
        calculateBtn.textContent = "Calculate";
        document.body.append(calculateBtn);

        calculateBtn.addEventListener("click", () => {
            document.body.innerHTML = "";

            const result = document.createElement("p");
            result.innerHTML = `${bmiCalculator(weighttInput.value, heightInput.value)}`;
            document.body.append(result);
        })

    });
    
});


