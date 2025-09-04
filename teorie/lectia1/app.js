const numere = [12, 23, 41, 4];
let [numar1, numar2, numar3, numar4] = numere;

const fullStack = [
    ["HTML", "React", "JS"],
    ["PHP", "C#", "Java"]
];

const [frontend, backend] = fullStack;
let [nr1, , ,nr4] = numere;
let [num1, ...rest] = numere;

const orase = ["Cahul", "Cantemir", "Leova"];
const localitati = ["Rosu"];
const oraseLocalitati = [...orase, ...localitati];

console.log(oraseLocalitati);

