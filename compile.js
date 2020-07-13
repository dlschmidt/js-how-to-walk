
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
        let lineForward = false;

        lines = lines.map(line => {
            let result = "";
            if(line.startsWith("//") || lineForward) {
                lastLineEmpty = false;
                result = line;
            } else if(lastLineEmpty) {
                result = undefined;
            } else {
                lastLineEmpty = true;
                result = "\n";
            }

            if(line.endsWith("\\")) {
                result = result.substring(0, result.length - 2);
                lineForward = true;
            } else {
                lineForward = false;
            }
            return result;
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
