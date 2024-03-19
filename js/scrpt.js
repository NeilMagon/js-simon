// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
// quali dei numeri da indovinare sono stati individuati.

// Creo l'array dei miei numeri random
const pcNumber = [];

// Creo un ciclo per pusciare 5 numeri nell'array
for (let i = 0; i < 5; i++) {
    let randomNumber = getRandomNumber(1, 100);
    if (!pcNumber.includes(randomNumber)) {
        pcNumber.push(randomNumber);
    }
}

// Creo una funziona per generare 5 numeri
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  