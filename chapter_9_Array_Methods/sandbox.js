const scores = [10, 30, 15, 25, 50, 40, 5];

// //////////////////////////////////// filter method
// //////// my filter

// const myArray = {
//     0: 10,
//     1: 30,
//     2: 15,
//     3: 25,
//     4: 50,
//     5: 40,
//     6: 5,
//     length: 7,
//     myFilter(funcCallback) {
//         let k = 0;
//         const newArray = {}
//         for(let i = 0; i < this.length; i++) {
//             if(funcCallback(this[i], i)) {
//                 newArray[k] = this[i];
//                 newArray.length = ++k;
//             }
//         }
//         return newArray;
//     }
// }

// console.log(myArray);

// const myNewArray = myArray.myFilter((elem, index) => {
//     console.log(elem);
//     console.log(index);
//     return elem > 20;
// });

// console.log(myNewArray);

// //////// array object filter

// const filteredScores = scores.filter(score => {
//     return score > 20;
// });

// console.log(filteredScores);

// //////////////////////////////////// map method

// console.log(scores);

// const halfScores = scores.map(score => {
//     return score / 2;
// });

// console.log(halfScores);

// //////////////////////////////////// reduce method

// const myArray = {
//     0: 10,
//     1: 30,
//     2: 15,
//     3: 25,
//     4: 50,
//     5: 40,
//     6: 5,
//     length: 7,
//     myReduce(funcCallback, a) { 
//         let acc = a;
//         for(let i = 0; i < this.length; i++) {
//             acc = funcCallback(acc, this[i]);
//         }
//         return acc;
//     }
// }

// const result = myArray.myReduce((acc, curr) => {
//     if(curr > 25) {
//         acc++
//     }
//     return acc;
// }, 0);

// console.log(result);

// const result2 = scores.reduce((acc, curr) => {
//     if(curr > 49) {
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result2);

// const scores2 = [
//     {player: 'Mario', score: 50},
//     {player: 'Yoshi', score: 50},
//     {player: 'Mario', score: 70},
//     {player: 'Crystal', score: 50},
//     {player: 'Mario', score: 50},
//     {player: 'Yoshi', score: 50},
//     {player: 'Mario', score: 70},
//     {player: 'Crystal', score: 50},
//     {player: 'Mario', score: 50},
//     {player: 'Yoshi', score: 50},
//     {player: 'Mario', score: 70},
//     {player: 'Crystal', score: 50},
//     {player: 'Mario', score: 50},
//     {player: 'Yoshi', score: 50},
//     {player: 'Mario', score: 70},
//     {player: 'Crystal', score: 50}
// ];

// const marioTotalScore = scores2.reduce((acc, curr) => {
//     if(curr.player === 'Mario') {
//         acc += curr.score
//     }
//     return acc;
// }, 0);

// console.log(marioTotalScore);

// //////////////////////////////////// find method

// const scoreUnder25 = scores.find((score, index) => {
//     return index === 0;
// });

// console.log(scoreUnder25);

// //////////////////////////////////// sort method

// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort();
// names.reverse();

// console.log(names);

// scores.sort();

// console.log(scores);

// const players = [
//     {player: 'Mario', score: 50},
//     {player: 'Yoshi', score: 50},
//     {player: 'Mario', score: 70},
//     {player: 'Crystal', score: 50},
//     {player: 'Mario', score: 50},
//     {player: 'Yoshi', score: 50},
//     {player: 'Mario', score: 70},
//     {player: 'Crystal', score: 50},
//     {player: 'Mario', score: 50},
//     {player: 'Yoshi', score: 50},
//     {player: 'Mario', score: 70},
//     {player: 'Crystal', score: 50},
//     {player: 'Mario', score: 50},
//     {player: 'Yoshi', score: 50},
//     {player: 'Mario', score: 70},
//     {player: 'Crystal', score: 50}
// ];

// // players.sort((a, b) => {
// //     if(a.score > b.score) {
// //         return -1;
// //     } else if(b.score > a.score) {
// //         return 1;
// //     } else {
// //         return 0;
// //     }
// // });

// players.sort((a, b) => {
//     return b.score - a.score;
// }); 

// console.log(players);

// //////////////////////////////////// chaining array methods

const products = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50},
];

const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);