const rectangle = {
    width: 5,
    height: 4,
    area: 20
}

// let { width, height, area } = rectangle;
let { width: w, height: h, area: a, perimetru = 0 } = rectangle;

// console.log( width, height, area );
console.log( w, h, a, perimetru );
// console.log( typeof width );