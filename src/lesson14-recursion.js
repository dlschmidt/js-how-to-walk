
// Die Fakultät ist eine Funktion, die einer Zahl natürlichen Zahl n das Produkt
// der Zahlen von 1 bis zu dieser Zahl n zuordnet. Beispiele:
//
// 0! = 1 (leeres Produkt ist immer 1, wie bei a^0 für a element N)
// 1! = 1                   = 1
// 2! = 1 * 2               = 2
// 3! = 1 * 2 * 3           = 6
// 4! = 1 * 2 * 3 * 4       = 24
// 5! = 1 * 2 * 3 * 4 * 5   = 120

// Stelle eine Funktion factorial_iterative(n) auf, die die Fakultät einer beliebigen
// Zahl n interativ berechnet. Dies ist vergleichbar mit der bereits aufgestellten
// Funktion "numbers".
function factorial_iterative(n) {
    let result = 1;
    for(let i = 1; i <= n; i++)
        result *= n;
    return result;
}

// In der Praxis ist es auch möglich, die Berechnungen umzuformen, da sich Teilabschnitte
// wiederholen. Siehe:
//
// 0! = 1
// 1! = 1 * f(0)
// 2! = 2 * f(1)
// 3! = 3 * f(2)
// 4! = 4 * f(3)
// 5! = 5 * f(4)

// Rechne zur Probe 4! schriftlich.

// Stelle nun eine Funktion factorial_recursive(n) auf, die die Fakultät hingegen
// rekursiv berechnet.
function factorial_recursive(n) {
    if(n <= 1) return 1;
    else return factorial_recursive(n - 1) * n;
}

// Gesucht sind nun die Vorteile und Nachteile beider Vorgehensweisen.
