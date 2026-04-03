function controllaQuiz() {
    let punteggio = 0;
    // Seleziona solo le risposte cliccate
    let risposte = document.querySelectorAll('input[type="radio"]:checked');

    // Controlla se l'utente ha risposto a tutte le domande (sono 3)
    if (risposte.length < 3) {
        alert("Per favore, rispondi a tutte le domande prima di inviare!");
        return;
    }

    // Ciclo per controllare quante sono corrette
    risposte.forEach(risposta => {
        if (risposta.value === "corr") {
            punteggio++;
        }
    });

    // Mostra il risultato sulla pagina
    let display = document.getElementById("risultatoTesto");
    display.innerHTML = "Hai totalizzato " + punteggio + "/3!";

    if (punteggio === 3) {
        display.style.color = "#00FF00"; // Verde se perfetto
        display.innerHTML += " - Sei un vero esperto Beta!";
    } else {
        display.style.color = "red"; // Rosso se ci sono errori
    }
}
