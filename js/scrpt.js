// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
// quali dei numeri da indovinare sono stati individuati.

// Seleziono tramite id il mio div 
let pcDiv = document.querySelector(`#myNumber`);

// Creo l'array dei miei numeri random
const pcNumbers = [];

// Creo un ciclo per pusciare 5 numeri nell'array
for (let i = 0; i < 5; i++) {
    let randomNumber = getRandomNumber(1, 100);
    if (!pcNumbers.includes(randomNumber)) {
        pcNumbers.push(randomNumber);
    }
}

//  Mostro i numeri sul mio html
pcDiv.innerHTML = `${pcNumbers}`;

// Dopo 30 secondi i numeri scompaiono 
setTimeout(() => {
    pcDiv.innerHTML = ``;
    // l'utente deve inserire, uno alla volta, 
    // i numeri che ha visto precedentemente, tramite il prompt().
    let userNumbers = [];
    for (let i = 0; i < 5; i++) {
        let userNumber = parseInt(prompt("Inserisci i numeri che hai visto"));
        if (!userNumbers.includes(userNumber)) {
            userNumbers.push(userNumber);
        }
    }
    // Dice quanti e quali dei numeri da indovinare sono stati individuati
    showResult(pcNumbers, userNumbers);
}, 3000)

// Creo una funziona per controllare quanti e quali dei numeri da indovinare sono stati scritti
function showResult(pcNumb, userNumb) {
    let correctNumbers = [];
    for (let i = 0; i < userNumb.length; i++) {
        if (pcNumb.includes(userNumb[i])) {
            correctNumbers.push(userNumb[i]);
        }
    }
    pcDiv.innerHTML = `Hai indovinato ${correctNumbers}.`;
}

// Creo una funziona per generare 5 numeri
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  