// Variabile che contiene il numero casuale da indovinare (tra 0 e 3)
let numeroDaIndovinare = Math.floor(Math.random() * 4);

// Elementi della pagina con jQuery
const inputGuess = $('#userGuess');
const buttonGuess = $('#submitGuess');
const message = $('#message');
const resetButton = $('#resetGame');

buttonGuess.click(function()  {
    let userGuess = parseInt(inputGuess.val());

    // verifico se l'input è corretto
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 3)  {
        message.text("Per favore inserisci un numero tra 0 e 3").css('color','red');
        return;
    }

    // verifico se l'utente ha indovinato
    if (userGuess === numeroDaIndovinare)  {
        message.text("Complimenti hai indovinato!").css('color','green');
        // abilito la visualizzazione del pulsante
        resetButton.css('display', 'inline-block');
    } else {
        message.text("Sbagliato, ritenta!").css('color','orange');
    }
});

// funzione per il reset
resetButton.click(function() {
    numeroDaIndovinare = Math.floor(Math.random() * 4);
    inputGuess.val(''); // ripulisco l'input dell'utente
    message.text(''); // resetto i messaggi
    resetButton.css('display','none');  // rinascondo il tasto di reset
});