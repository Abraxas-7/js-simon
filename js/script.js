// Funzione che genera un numero casuale tra 1 e 50
function getRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

// Variabili per il countdown
let seconds = 10;
const message = document.getElementById("countdown");

// Variabili per lista dei numeri e form
const numbersList = document.getElementById("numbers-list");
const answersForm = document.getElementById("answers-form");

// Array per i numeri generati
let generatedNumbersArray = [];
// Array per i numeri dell'utente
let userInputArray = [];
// Array per i numeri indovinati
let correctNumbersArray = [];

// Generazione dei numeri
for (let i = 0; i < 5; i++) {
    let randomNumber;

    // Verifico che il numero non sia stato gi  generato
    do {
        randomNumber = getRandomNumber(); 
    } while (generatedNumbersArray.includes(randomNumber)); 

    // Aggiungo il numero all'array
    generatedNumbersArray.push(randomNumber);

    // Creo l'elemento della lista
    const listItem = document.createElement("li");
    listItem.textContent = randomNumber; 
    numbersList.appendChild(listItem);
}

// Creo un intervallo per il countdown
const countdownInterval = setInterval(function () {
    // Verifico se i secondi sono > 1
    if (seconds > 1) {
        // Decremento i secondi
        message.innerHTML = --seconds;
    } else {
        // Interrompo l'intervallo
        clearInterval(countdownInterval);
        // Cambio il testo del countdown
        message.innerHTML = "Tempo scaduto!";
        // Cambio il testo delle istruzioni
        instructions.innerHTML = "Inserisci i numeri:";
        // Nascondo la lista dei numeri
        numbersList.classList.add("d-none");
        // Mostro il form
        answersForm.classList.toggle("d-none");
    }
}, 1000);

// Variabile per il bottone
const button = document.getElementById("confirmButton");

// Aggiungo un listener al bottone
button.addEventListener("click", function () {
    event.preventDefault();

    // Variabile per l'array degli input
    const inputs = document.querySelectorAll("#input-group input");

    // Riempio l'array dell'utente
    inputs.forEach(input => {
        userInputArray.push(Number(input.value));
    });

    // Creo l'array dei numeri indovinati
    correctNumbersArray = userInputArray.filter(number => generatedNumbersArray.includes(number));

    // Nascondo il form
    answersForm.classList.toggle("d-none");

    // Verifico se l'utente ha indovinato almeno un numero
    if (correctNumbersArray.length > 0) {
        // Cambio il testo del countdown
        message.innerHTML = `Complimenti! Hai indovinato ${correctNumbersArray.length} numeri!`;
        // Cambio il testo delle istruzioni
        instructions.innerHTML = `I numeri indovinati sono: ${correctNumbersArray.join(", ")}`;
    } else {
        // Cambio il testo del countdown
        message.innerHTML = "Riprova!";
        // Cambio il testo delle istruzioni
        instructions.innerHTML = "Mi dispiace, non hai indovinato nessun numero.";
    }
});


