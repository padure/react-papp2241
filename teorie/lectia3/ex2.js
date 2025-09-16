// Definirea clasei Student
class Student {
    constructor(nume) {
      this.nume = nume;
    }
  
    studiaza() {
      console.log(`${this.nume} studiază.`);
    }
  }
  
  // Extinderea clasei Student pentru a crea clasa Elev
  class Elev extends Student {
    constructor(nume, scoala) {
      super(nume); // Apelarea constructorului clasei părinte (Student)
      this.scoala = scoala;
    }
  
    mergeLaScoala() {
      console.log(`${this.nume} merge la școala ${this.scoala}.`);
    }
  }
  
  // Crearea unei instanțe a clasei Elev
  let elev1 = new Elev("Maria", "Colegiul Iulia Hasdeu");
  elev1.studiaza(); // "Maria studiază."
  elev1.mergeLaScoala(); // "Maria merge la școala Colegiul Iulia Hasdeu."
  
  let elev2 = new Elev("Andrei", "Liceul Mihai Eminescu");
  elev2.studiaza(); // "Andrei studiază."
  elev2.mergeLaScoala(); // "Andrei merge la școala Liceul Mihai Eminescu."
  