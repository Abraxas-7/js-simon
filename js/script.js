function getRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

let seconds = 2;
const message = document.getElementById("countdown");
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");

let generatedNumbersArray = [];
let userInputArray = [];
let correctNumbersArray = [];

for (let i = 0; i < 5; i++) {
    let randomNumber;

    do {
        randomNumber = getRandomNumber(); 
    } while (generatedNumbersArray.includes(randomNumber)); 

    generatedNumbersArray.push(randomNumber);

    const listItem = document.createElement("li");
    listItem.textContent = randomNumber; 
    numbersList.appendChild(listItem);
}

const countdownInterval = setInterval(function () {
    if (seconds > 1) {
        message.innerHTML = --seconds;
    } else {
        clearInterval(countdownInterval);
        message.innerHTML = "Tempo scaduto!";
        instructions.innerHTML = "Inserisci i numeri:";
        numbersList.classList.add("d-none");
        answersForm.classList.remove("d-none");
    }
}, 1000);

const button = document.getElementById("confirmButton");

button.addEventListener("click", function () {
    event.preventDefault();

    const inputs = document.querySelectorAll("#input-group input");

    inputs.forEach(input => {
        userInputArray.push(Number(input.value));
    });

    

});


