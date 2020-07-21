
// Gegeben ist der Dateiname "test_fs.txt"

// Schreibe diesen Dateinamen in eine konstante Variable namens "filename"
const filename = "test_fs.txt";

// Schreibe per in die Datei mit dem Namen "filename" den Text "Hello World!"
fs.writeFileSync(filename, "Hello World!");

// Erstelle eine Variable "buffer", die den Rückgabewert von fs.readFileSync(filename) enthält
let buffer = fs.readFileSync(filename);

// Gib den Buffer per console.log(...) aus
console.log(buffer);

// Ändere die Ausführung so ab, dass der ursprüngliche Text ausgegeben wird
console.log(buffer.toString());

// Gib den Inhalt einer zweiten Datei namens "lines.txt" zeilenweise aus, wobei jede
// Ausgabe mit der Zeilennummer beginnen soll

