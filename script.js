/////

// Inizializzo l'array che conterrà gli object
// const luoghi = [];

// Seleziono gli elementi dell'HTML
const BTN_UP = document.getElementById('btnFwd');
const BTN_DOWN = document.getElementById('btnBack');
const IMG = document.getElementById('fotoCopertina');
const TEXT = document.getElementById('testo');

// Inizializzo la variabile contatore
let counter = 0;

// // Definisco gli object
// const luogo1 = {
//   foto: 'img/Torino - Mole Antonelliana.jpg',
//   title: 'Mole Antonelliana',
// };
// const luogo2 = {
//   foto: 'img/Torino - Piazza Castello.jpg',
//   title: 'Piazza Castello',
// };
// const luogo3 = {
//   foto: 'img/Torino - Piazza Vittorio Veneto.jpeg',
//   title: 'Piazza Vittorio Veneto',
// };
// const luogo4 = {
//   foto: 'img/Torino - Fiume Po.jpg',
//   title: 'Fiume Po',
// };
// const luogo5 = {
//   foto: 'img/Torino - Piazza San Carlo.jpg',
//   title: 'Piazza San Carlo',
// };

/////

// Aggiungo gli object all'array
// luoghi.push(luogo1);
// luoghi.push(luogo2);
// luoghi.push(luogo3);
// luoghi.push(luogo4);
// luoghi.push(luogo5);

/////

// Scateno la funzione al click dei buttons
BTN_DOWN.onclick = counterDown;
BTN_UP.onclick = counterUp;

/////

// Scorro l'array di object
for (const luogo of luoghi) {
  console.log(luogo);
}

/////

// Definisco la funzione che aumenta il counter
function counterUp() {
  counter++;
  // Logica per selezionare la posizione dell'object nell'array
  if (counter > luoghi.length - 1) {
    counter = 0;
  }
  display();
}

// Definisco la funzione che decresce il counter
function counterDown() {
  counter--;
  // Logica per selezionare la posizione dell'object nell'array
  if (counter < 0) {
    counter = luoghi.length - 1;
  }
  display();
}

function display() {
  console.log(counter);
  console.log(IMG);
  IMG.src = luoghi[counter].foto;
  TEXT.textContent = luoghi[counter].title;
}

/////
