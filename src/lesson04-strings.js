// Definiere eine Variable "text", die deinen Namen besitzt
let text = "Dennis";

// Gib per Konsole die Länge des Namens aus
console.log(text.length);

// Füge an den Anfang deines Namens "Mein Name ist " (Pluszeichen oder .concat)
text = "Mein Name ist " + text;

// Finde die Position des Wortes "ist" im Text
console.log(text.indexOf("ist"));

// Ersetze den Begriff "Name" durch "Vorname"
console.log(text.replace("Name", "Vorname"));

// Wandle den Text in Caps-Lock um
console.log(text.toUpperCase());

// Splitte den Text in einzelne Wörter auf
console.log(text.split(" "));

// Schreibe eine Funktion "getPercentage", die eine Zahl (float von 0 bis 1) als Prozentzahl als String zurückgibt
function getPercentage(number) { return number.toFixed(2) + " %" };

// Gegeben ist eine Funktion in JavaScript zum Umkehren von Strings
// function reverseString(text) { return text.split("").reverse().join("") };

// Schreibe eine Funktion "isPalindrome", die überprüft, ob ein Text ein Palindrom ist
function isPalindrome(text) { 
    return typeof text === "string" && 
            text.length != 0 && 
            reverseString(text).toLowerCase() == text.toLowerCase();
}

// Prüfe deine Funktion mit "Apfel" und "Otto" (Ausgabe in die Konsole)
console.log(isPalindrome("Apfel"), isPalindrome("Otto"));
