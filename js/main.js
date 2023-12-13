/*

    L'utente clicca su un bottone che genera una griglia di gioco quadrato:

    -- 1) Ogni cella ha un numero progressivo da 1 a 100;
    -- 2) Saranno 10 righe da 10 caselle;
    -- 3) Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.

    BONUS
    Il giocatore deve avere la possibilità di controllare il numero di celle che vengono generate
    Tramite una select l'utente seleziona il livello di difficoltà e in base a quello vengono generate le celle:

        - Difficoltà 1 ==> 100 Celle;
        - Difficoltà 2 ==> 81 Celle;
        - Difficoltà 3 ==> 49 Celle. 
*/

// Definisco in una Variabile il bottone per giocare
const myButton = document.querySelector('button');
console.log('myButton', myButton, typeof myButton);

// Definisco una Variabile con la quale prendo il Container dall'HTML
const containerGrid = document.querySelector('.container-grid');
console.log('containerGrid', containerGrid, typeof containerGrid);

// Creo una Flag per l'interruttore
let play = false;

// Creo l'evento per cui le celle si generano al click del Bottone
myButton.addEventListener('click', function(){

    // Creo la condizione che mi controlli lo stato dell'interruttore
    if (play) {

        containerGrid.innerHTML = '';
        play = false;

    }  else {

        // Definisco una Variabile con la quale prendo il Valore delle Option della Select
        let difficultLevel = parseInt(document.getElementById('difficult-level').value);
        console.log('difficultLevel', difficultLevel, typeof difficultLevel);

        let level = difficultLevel;


        cellGenerator (containerGrid, level);
        play = true;
    }

})


// Creo la funzione che generi il contenitore
function cellGenerator (div, level) {
    // Creo un Ciclo per cui vengono generate 100 celle
    for(let i = 1; i <= level; i++){
        // Definisco una Variabile con la quale creo la Cella da inserire nel Container
        const cell = document.createElement('div');
        console.log('cell', cell, typeof cell);

        // Assegno alle celle la classe che gli da lo stile
        cell.classList.add('cell');

        // Stampo all'interno delle celle il numero progressivo corrispondente
        cell.innerHTML = i;

        // "Appendo" la Cella al Contenitore 
        div.append(cell);

        // Aggiungo l'evento click alle celle per cui viene cambiato lo sfondo
        cell.addEventListener('click', function(){
            cell.classList.toggle('active');
            console.log(this.click)
        })
    }  
    
}


