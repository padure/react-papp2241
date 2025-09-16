// Extinderea prototipului obiectului Array
Array.prototype.sumaElemente = function() {
    return this.reduce((suma, element) => {
        return (typeof element === 'number')
            ? suma + element
            : suma;
    }, 0);
  };
  
  // Testarea metodei sumaElemente
  let numere = [1, 2, 3, 4, 5];
  console.log(numere.sumaElemente()); // 15
  
  let mixt = [1, "test", 3, true, 5];
  console.log(mixt.sumaElemente()); // 9 (se ignoră elementele care nu sunt numere)
  
  let faraNumere = ["a", "b", "c"];
  console.log(faraNumere.sumaElemente()); // 0 (fără numere în array)
  