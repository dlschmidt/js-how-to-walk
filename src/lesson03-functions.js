
// Erstelle eine Funktion, die "Hello World" über die Konsole ausgibt
function helloWorld() {
    console.log("Hello World");
}

// Rufe diese Funktion auf
helloWorld();

// Erstelle eine Funktion, die immer die 42 als Rückgabewert zurückgibt
function my42() { return 42; }

// Erstelle eine Funktion namens "not", die immer das Gegenteil des Arguments "bool" zurückgibt
function not(bool) { return !bool; }

// Erstelle eine Funktion namens "add", die die Summe zweier Zahlen a und b ermittelt
function add(a, b) { return a + b; }

// Gebe die Summe der Zahlen 3 und 5 über die Konsole aus. Nutze dafür die "add"-Funktion
console.log(add(3, 5));

// Schreibe eine Funktion "numbers", die als Rückgabewert alle natürlichen Zahlen bis n ausgibt
// (Array zum Speichern der Nummern, befüllen mit for-Schleife und dann returnen)
function numbers(n) {
    let result = [];
    for(let i = 0; i < n; i++) {
        result.push(i);
    }
    return result;
}


