
// Definiere eine Variable namens 'x' ohne Startwert
let x;

// Definiere eine Variable namens 'arr', die als Startwert eine Auflistung
// von mindextens fünf unterschiedlichen Werten enthält
let arr = [4, 1, 2, 3, 5];

// Liste per console.log(...) das dritte Element der Auflistung
console.log(arr[2]);

// Gehe mittels einer for-in-Schleife durch alle Einträge durch und gebe
// diese per console.log(...) aus
for(let index in arr) {
    console.log(arr[index]);
}

// Nutze anstelle for-in for-of
for(let item of arr) {
    console.log(item);
}

// Wenn x nicht definiert ist, soll per console.warn(...) eine Warnung ausgeben werden
if(typeof x == "undefined") {
    console.warn("Ich warne dich!!");
}

// Wenn der erste Wert des Arrays größer ist als 42, soll dies per console.log(...) ausgegeben werden


