const numere = [12, 31, 23, 1, 12, 10000, 7, 6];
// console.log(numere.toString());
// console.log(numere.join("*"));
//Adauga
numere.push(78);
numere.unshift(10);
//Sterge
numere.pop();
numere.shift();
// delete numere[1];
//Concatenare
// const numere2 = numere.concat([2025, 2026]);
const numere2 = [...numere, ...[2025, 2026]];
//Sort
numere.sort( (a, b) => a - b ); // Crescator
numere.sort( (a, b) => b - a ); // Descrescator
//Splice
// console.log(numere);
numere.splice(2, 2, ["a", "b", "c"]);
//Slice
const nr = [1, 2, 3, 4, 5, 3];
// const mod = nr.slice(4, 5);
// Revers
// nr.reverse();
//IndexOf
// let response = nr.indexOf(1);
// let response = nr.lastIndexOf(3);

// let response = nr.find((nr) => nr > 3 );
// let response = nr.filter((nr) => nr > 3 );
// let response = nr.includes(22);

const fructe = ["mere", "pere", "gutui", "ananas"];

// const response = fructe.forEach( fruct => console.log(fruct.toLocaleUpperCase()) );
// const response = fructe.forEach( fruct => fruct.toLocaleUpperCase() );

const valori = [234, 421, 11, 21, 23];
let response = valori.reduce( (acc, val) => acc += val, 0 );

console.log(response);