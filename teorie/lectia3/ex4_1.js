// Funcție constructor pentru Dispozitiv (bază pentru toate dispozitivele electronice)
function Dispozitiv(brand, pret) {
    this.brand = brand;
    this.pret = pret;
}

Dispozitiv.prototype.afiseazaDetalii = function () {
    console.log(`Dispozitiv: ${this.brand}, Preț: ${this.pret} EUR`);
};

// Funcție constructor pentru Laptop (extinde Dispozitiv)
function Laptop(brand, pret, diagonalaEcran) {
    Dispozitiv.call(this, brand, pret); // Moștenire proprietăți din Dispozitiv
    this.diagonalaEcran = diagonalaEcran;
}

Laptop.prototype = Object.create(Dispozitiv.prototype); // Moștenire metode din Dispozitiv
Laptop.prototype.constructor = Laptop;

Laptop.prototype.afiseazaEcran = function () {
    console.log(`${this.brand} are un ecran de ${this.diagonalaEcran} inch.`);
};

// Funcție constructor pentru GamingLaptop (extinde Laptop)
function GamingLaptop(brand, pret, diagonalaEcran, placaVideo) {
    Laptop.call(this, brand, pret, diagonalaEcran); // Moștenire proprietăți din Laptop
    this.placaVideo = placaVideo;
}

GamingLaptop.prototype = Object.create(Laptop.prototype); // Moștenire metode din Laptop
GamingLaptop.prototype.constructor = GamingLaptop;

GamingLaptop.prototype.afiseazaPlacaVideo = function () {
    console.log(`${this.brand} folosește placa video: ${this.placaVideo}`);
};

// Testare
let dispozitiv = new Dispozitiv("Generic Device", 300);
dispozitiv.afiseazaDetalii(); // "Dispozitiv: Generic Device, Preț: 300 EUR"

let laptop = new Laptop("Dell", 1200, 15.6);
laptop.afiseazaDetalii(); // "Dispozitiv: Dell, Preț: 1200 EUR"
laptop.afiseazaEcran(); // "Dell are un ecran de 15.6 inch."

let gamingLaptop = new GamingLaptop("Asus", 2500, 17.3, "NVIDIA RTX 3080");
gamingLaptop.afiseazaDetalii(); // "Dispozitiv: Asus, Preț: 2500 EUR"
gamingLaptop.afiseazaEcran(); // "Asus are un ecran de 17.3 inch."
gamingLaptop.afiseazaPlacaVideo(); // "Asus folosește placa video: NVIDIA RTX 3080"
