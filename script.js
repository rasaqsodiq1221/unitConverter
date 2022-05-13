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

enterValue.addEventListener('click', displayValue);

function displayValue() {
  let outputValue = inputValue.value;
  mainValue.textContent = outputValue;
  lenghtConversion();
  volumeConversion();
  massConversion();
}

function lenghtConversion() {
  const meterToFeet = 3.28084;
  
}