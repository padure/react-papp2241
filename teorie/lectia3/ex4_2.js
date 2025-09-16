// Clasa Dispozitiv
class Dispozitiv {
    constructor(brand, pret) {
        this.brand = brand;
        this.pret = pret;
    }

    afiseazaDetalii() {
        console.log(`Dispozitiv: ${this.brand}, Preț: ${this.pret} EUR`);
    }
}

// Clasa Laptop (extinde Dispozitiv)
class Laptop extends Dispozitiv {
    constructor(brand, pret, diagonalaEcran) {
        super(brand, pret); // Apelare constructorul clasei părinte
        this.diagonalaEcran = diagonalaEcran;
    }

    afiseazaEcran() {
        console.log(`${this.brand} are un ecran de ${this.diagonalaEcran} inch.`);
    }
}

// Clasa GamingLaptop (extinde Laptop)
class GamingLaptop extends Laptop {
    constructor(brand, pret, diagonalaEcran, placaVideo) {
        super(brand, pret, diagonalaEcran); // Apelare constructorul clasei părinte
        this.placaVideo = placaVideo;
    }

    afiseazaPlacaVideo() {
        console.log(`${this.brand} folosește placa video: ${this.placaVideo}`);
    }
}

// Testare
let dispozitiv2 = new Dispozitiv("Dispozitiv Bază", 400);
dispozitiv2.afiseazaDetalii(); // "Dispozitiv: Dispozitiv Bază, Preț: 400 EUR"

let laptop2 = new Laptop("HP", 1400, 14);
laptop2.afiseazaDetalii(); // "Dispozitiv: HP, Preț: 1400 EUR"
laptop2.afiseazaEcran(); // "HP are un ecran de 14 inch."

let gamingLaptop2 = new GamingLaptop("MSI", 2800, 17.3, "NVIDIA RTX 3090");
gamingLaptop2.afiseazaDetalii(); // "Dispozitiv: MSI, Preț: 2800 EUR"
gamingLaptop2.afiseazaEcran(); // "MSI are un ecran de 17.3 inch."
gamingLaptop2.afiseazaPlacaVideo(); // "MSI folosește placa video: NVIDIA RTX 3090"
