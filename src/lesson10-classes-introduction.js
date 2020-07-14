
// Definiere eine Klasse namens 'Car'
// Der Konstruktor soll folgende Eigenschaften abspeichern
// - Hersteller
// - Kennzeichen
// - Farbwert als RGB-Array (z.B. [255, 128, 0])
// - Nettopreis in Euro

class Car {
    constructor(manufacturer, licence_plate, color, net_price) {
        this.manufacturer = manufacturer;
        this.licence_plate = licence_plate;
        this.color = color;
        this.net_price = net_price;
    }

    paint(r, g, b) {
        this.color = [r, g, b];
    }
}

// Erstelle eine Liste namens 'cars'
let cars = [];

// Füge zu dieser Liste fünf belibige Fahrzeuge hinzu
cars.push(
    new Car("Audi", "HAL AB 123", [160, 255, 0], 31200),
    new Car("MB", "HAL XZ 312", [255, 40, 30], 21000),
    new Car("Porsche", "B 9123", [23, 23, 23], 53000),
    new Car("Opel", "MS KI 221", [40, 50, 233], 18000),
    new Car("Tesla", "X AEA 12", [255, 43, 23], 45000)
);

// Gib über die Konsole jeweils Kennzeichen, Nettopreis und Bruttopreis (+16%) aus
for(let car of cars) {
    console.log(car.licence_plate, car.net_price, car.net_price*1.19);
}

// Liste alle Fahrzeuge auf, die ein hallisches Kennzeichen aufweisen. Nutze dafür cars.filter(...) und car.startsWith(...)
console.log(cars.filter(car => car.licence_plate.startsWith("HAL")));

// Liste alle Kennzeichen der Fahrzeuge auf, die rötlich sind (R > 128; G, B < 128)
console.log(cars.filter(car => {
    return car.color[0] > 128 && car.color[1] < 128 && car.color[2] < 128;
}));

// Füge zum Auto eine Methode "paint" mit den Argumenten R, G und B hinzu, welche die Farbe des Autos überschreibt

// Erstelle eine Klasse namens "Truck", welche vom Typ "Car" erbt und eine zusätzliche Eigenschaft "load" enthält
class Truck extends Car {
    constructor(manufacturer, license_plate, color, net_price, load) {
        super(manufacturer, license_plate, color, net_price);
        this.load = load;
    }
}
