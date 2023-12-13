/*

    L'utente clicca su un bottone che genera una griglia di gioco quadrato:

    -- 1) Ogni cella ha un numero progressivo da 1 a 100;
    -- 2) Saranno 10 righe da 10 caselle;
    -- 3) Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.

*/

// Creo un Ciclo per cui vengono generate 100 celle
for(let i = 1; i <= 100; i++){
    // Definisco una Variabile con la quale prendo il Container dall'HTML
    const containerGrid = document.querySelector('.container-grid');
    console.log('containerGrid', containerGrid, typeof containerGrid);

    // Definisco una Variabile con la quale creo la Cella da inserire nel Container
    const cell = document.createElement('div');
    console.log('cell', cell, typeof cell);

    // Assegno alle celle la classe che gli da lo stile
    cell.classList.add('cell');

    // Stampo all'interno delle celle il numero progressivo corrispondente
    cell.innerHTML = i;

    // "Appendo" la Cella al Contenitore 
    containerGrid.append(cell);

}

