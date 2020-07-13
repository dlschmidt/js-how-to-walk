
// Definiere eine Klasse namens 'Car'
// Der Konstruktor soll folgende Eigenschaften abspeichern
// - Hersteller
// - Kennzeichen
// - Farbwert in RGB / Hex (z.B. 0xFF0000)
// - Nettopreis in Euro

class Car {
    constructor(manufacturer, licence_plate, color, net_price) {
        this.manufacturer = manufacturer;
        this.licence_plate = licence_plate;
        this.color = color;
        this.net_price = net_price;
    }
}

// Erstelle eine Liste namens 'cars'
let cars = [];

// Füge zu dieser Liste fünf belibige Fahrzeuge hinzu
cars.push(
    new Car("Audi", "HAL AB 123", 0xFFAABB, 31200),
    new Car("MB", "HAL XZ 312", 0x33FF00, 21000),
    new Car("Porsche", "B 9123", 0x222222, 53000),
    new Car("Opel", "MS KI 221", 0xEE2233, 18000),
    new Car("Tesla", "X AEA 12", 0xEE4433, 45000)
);

// Gib über die Konsole jeweils Kennzeichen, Nettopreis und Bruttopreis (+16%) aus
for(let car of cars) {
    console.log(car.licence_plate, car.net_price, car.net_price*1.19);
}

// Liste alle Fahrzeuge auf, die ein hallisches Kennzeichen aufweisen


// Liste alle Kennzeichen der Fahrzeuge auf, die rötlich sind (R > 50%; G, B < 50%)
