let icon = document.getElementById('icon');

icon.addEventListener('click', toggleIcon);

function toggleIcon() {
    document.body.classList.toggle('darkTheme');
    if (document.body.classList.contains('darkTheme')) {
        icon.className = "fas fa-sun";
    }
    else {
        icon.className = "fas fa-moon"; 
    }
}

const modal = document.getElementById("modal");
const openModal = document.querySelector(".openModal");
const closeModal = document.querySelector(".closeModal");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});


let inputValue = document.getElementById('inputValue');
let enterValue = document.querySelector('.enterValue');
let mainValue = document.getElementById('mainValue');
const meterToFeet = 3.28084;
const literToGallon = 0.2641722;
const kiloToPounds = 2.20462;

enterValue.addEventListener('click', displayValue);


function displayValue() {
  let outputValue = inputValue.value;

  if (outputValue === "") {
    alert("Enter a Valid Number");
  } else {
    mainValue.textContent = outputValue;
  }
  let meterToFeetConversion = (outputValue * meterToFeet).toFixed(3);
  let feetToMeterConversion = (outputValue / meterToFeet).toFixed(3)
  lengthConversion();

    function lengthConversion() {
      let lengthPara = document.getElementById('lengthPara');
      lengthPara.textContent = `${outputValue} meters = ${meterToFeetConversion} feet | ${outputValue} feet = ${feetToMeterConversion} meters`
    }

  let literToGallonConversion = (outputValue * literToGallon).toFixed(3);
  let gallonToLiterConversion = (outputValue / literToGallon).toFixed(3);
  volumeConversion();

    function volumeConversion() {
      let volumePara = document.getElementById('volumePara');
      volumePara.textContent = `${outputValue} liters  = ${literToGallonConversion} gallons | ${outputValue} gallons = ${gallonToLiterConversion} liters `
    }

  let kiloToPoundsConversion = (outputValue * kiloToPounds).toFixed(3);
  let poundsToKiloConversion = (outputValue / kiloToPounds).toFixed(3);
  massConversion();

  function massConversion() {
    let massPara = document.getElementById('massPara');
    massPara.textContent = `${outputValue} kilos  = ${kiloToPoundsConversion} pounds | ${outputValue} pounds = ${poundsToKiloConversion} kilos `
  }
}


