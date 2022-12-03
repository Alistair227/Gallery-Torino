const luoghi = [
  // Definisco gli object
  {
    foto: 'img/Torino - Mole Antonelliana.jpg',
    title: 'Mole Antonelliana',
  },
  {
    foto: 'img/Torino - Piazza Castello.jpg',
    title: 'Piazza Castello',
  },
  {
    foto: 'img/Torino - Piazza Vittorio Veneto.jpeg',
    title: 'Piazza Vittorio Veneto',
  },
  {
    foto: 'img/Torino - Fiume Po.jpg',
    title: 'Fiume Po',
  },
  {
    foto: 'img/Torino - Piazza San Carlo.jpg',
    title: 'Piazza San Carlo',
  },
];

/////

// for (let i = 0; i < luoghi.length; i++) {
//   const luogo = luoghi[i];
//   console.log(luogo);
// }

// for (const luogo of luoghi) {
//   console.log(luogo);
// }

luoghi.forEach((luogo) => console.log(luogo.title)); // arrow function In JavaScript (fat arrow =>) - lambda expression in Java (thin arrow ->)
