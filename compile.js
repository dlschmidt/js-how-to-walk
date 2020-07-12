
const fs = require("fs");
const {promisify} = require("util");
const fsRead = promisify(fs.readFile);
const fsWrite = promisify(fs.writeFile);

async function main() {
    let files = fs.readdirSync("src");
    let fileTasks = files.map(async file => {
        let text = (await fsRead(`src/${file}`)).toString();
        let lines = text.includes("\r\n") ? text.split("\r\n") : text.split("\n");
    
        let lastLineEmpty = false;
        lines = lines.map(line => {
            if(line.startsWith("//")) {
                lastLineEmpty = false;
                return line;
            } else if(lastLineEmpty) {
                return undefined;
            } else {
                lastLineEmpty = true;
                return "";
            }
        });
        lines = lines.filter(line => line != undefined);
        lines = [
            "/".repeat(42),
            "// " + file,
            '/'.repeat(42),
            ...lines
        ];
        await fsWrite(`out/${file}`, lines.join("\n"));
    });
    
    await Promise.all(fileTasks);    
}

main();
