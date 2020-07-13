
// Definiere ein Array mit den ersten 10 Primzahlen (hard-coded)
let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

// Füge mithilfe von .push(...) drei weitere beliebige Werte hinzu
arr.push(4, 5, 6);

// Speichere in der Variablen 'indexOfFive', an welcher Stelle sich die 5 befindet
let indexOfFive = arr.indexOf(5);

// Entferne die 9 aus dem Array
arr.splice(indexOfFive, 1);

// Ersetze das 'arr' mit einem Array, welches Quadratzahlen der ursprünglichen Zahlen enthält. Nutze dafür die for-Schleife
for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]*arr[i];
}

// Wiederhole die letzte Teilaufgabe mit der .map-Funktion
arr = arr.map(oldItem => oldItem * oldItem);

// Kehre die Liste mit .reverse(...) um und speichere den Rückgabewert in arr

