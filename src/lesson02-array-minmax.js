
// Gegeben ist ein Array [5, 1, 6, 3, 4, 7, 8]
let arr = [5, 1, 6, 3, 4, 7, 8];

// Definiere eine Variable 'minValue', die als Startwert den ersten Wert
// des Arrays enthält
let minValue = arr[0];
let maxValue = arr[0];
let sum = 0;

// Gehe mithilfe einer for-in jeden einzelnen Wert des Arrays durch und ersetze
// 'minValue' mit diesem Wert, wenn dieser kleiner als 'minValue' ist
for(let val of arr) {
    if(val < minValue)
        minValue = val;
    if(val > maxValue)
        maxValue = val;

    sum += val;
}

// Gib den Wert 'minValue' in der Konsole aus
console.log(minValue);

// Ändere den oberen Code so ab, dass mithilfe einer einzelnen
// Schleife sowohl Minimum als auch Maximum bestimmt werden kann
console.log(maxValue);

// Ändere den oberen Code so ab, dass die Summe der Werte berechnet werden kann

// Gib per Console die Länge des Arrays aus
console.log(arr.length);

// Gib sowohl Summe als auch Durchschnitt über die Console aus
console.log(sum, sum / arr.length);
