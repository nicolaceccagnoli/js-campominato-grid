/*

    L'utente clicca su un bottone che genera una griglia di gioco quadrato:

    -- 1) Ogni cella ha un numero progressivo da 1 a 100;
    -- 2) Saranno 10 righe da 10 caselle;
    -- 3) Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emette un messaggio in console con il numero della cella cliccata.

*/

// Definisco una Variabile con la quale prendo il Container dall'HTML
const containerGrid = document.querySelector('.container-grid');
console.log('containerGrid', containerGrid, typeof containerGrid);

// Definisco una Variabile con la quale creo la Cella da inserire nel Container
const cell = document.createElement('div');
console.log('cell', cell, typeof cell);

cell.classList.add('cell');

// "Appendo" la Cella al Contenitore 
containerGrid.append(cell);