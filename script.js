//Genera numero aleatorio
console.log("Script bien enlazado");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("randomNumber");
// Math.random() Genera entre 0.00 y 0.99

//Guarda la referencia a cada parrafo de informacion
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

//guardan informacion a la entrada de texto y al boton "enviar"
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//Variable para los intentos
//La segunda guarda la referencia al boton reset
let guessCount = 1;
let resetButton;

//Function para comprobar el numero a adivinar
function checkGuess() {
    //Guarda el valor ingresado en el campo y se asegura que es un numero
    let userGuess = Number(guessField.value);

    // Comprueba si el jugador esta en el primer intento
    if (guessCount === 1){
        guesses.textContent = "Intentos anteriores: ";
    }
    guesses.textContent += userGuess + " ";
/* Este bloque condicional comprueba:
    1. Si el numero insertado ha sido adivando >yes, grat message in green
    2. Si no, Comprueba si el numero de intentos es 10 >yes,game over message
    3. si no, lanza el mensaje nemero no adivando no
    lanzando los mensajes correspondientes

*/
    if (userGuess === randomNumber) {
        lastResult.textContent = "Felicidades! Lo adivinaste!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10){
        lastResult.textContent =  "Fin del Juego!" //End the game
        setGameOver();
    } else {
        lastResult.textContent = "Incorrecto!"
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "El numero es muy bajo!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "El numero es muy grande!"
        }
    }
// Preparan las variables para el siguiente intento
//Vaciando el valor del campo numero
//y aplicando el foco a este
    guessCount++;
    guessField.value = "";
    guessField.focus();

}
guessSubmit.addEventListener("click",checkGuess);