
const fs = require("fs");
const path = require("path");
const {promisify} = require("util");
const fsRead = promisify(fs.readFile);
const fsWrite = promisify(fs.writeFile);
const fsExists = promisify(fs.exists);
const fsMkdir = promisify(fs.mkdir);

/**
 * TODO: Better CRLF / LF handling (arch: linux / win / macos)
 */

let templates = {};
let templ_content_margins = {};
let exts = ["js", "cpp", "java"];

if(process.argv[2]) {
    exts.push(...(process.argv[2].split(",")));
}

async function prepareLanguages() {
    await Promise.all(exts.map(async ext => {
        let exists = await fsExists(ext);
        if(!exists) {
            await fsMkdir(ext);
        }

        const templPath = path.join(process.cwd(), `./src/templates/${ext}.${ext}`);
        let templExists = await fsExists(templPath);
        if(templExists) {
            templates[ext] = (await fsRead(templPath)).toString();

            let lines = templates[ext].split("\r\n");
            let content_line = lines.find(x => x.includes("MAIN_CLASS_CONTENT"));
            if(!content_line) content_line = "";
            
            let margin = content_line.length - content_line.trim().length;
            templ_content_margins[ext] = margin;
        }
    }));
}

async function main() {
    await prepareLanguages();

    let files = fs.readdirSync("src");
    let fileTasks = files.map(async file => {
        if(!file.includes(".")) {
            return;
        }

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
                result = "\r\n";
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

        await Promise.all(exts.map(async ext => {
            let linesCopy = lines.slice(0, lines.length);
            let fnameSpl = file.split(".");
            fnameSpl[fnameSpl.length - 1] = ext;
            let fileContent = "";

            if(templates[ext]) {
                let className = lessonNameToClassName(fnameSpl[0]);

                fileContent = templates[ext].repeat(1); // deep-copy
                fileContent = fileContent.replace("MAIN_CLASS_NAME", className);
                fileContent = fileContent.replace("MAIN_CLASS_CONTENT", linesCopy.map(
                    line => " ".repeat(templ_content_margins[ext]) + line
                ).join("\r\n"));

                if(ext == "java") { fnameSpl[0] = className; }
            } else {
                fileContent = linesCopy.join("\r\n");
            }

            fileContent = [
                "/".repeat(42),
                "// " + fnameSpl.join("."),
                "/".repeat(42),
                ""
            ].join("\r\n") + fileContent;
            
            await fsWrite(`${ext}/${fnameSpl.join(".")}`, fileContent);
        }));
    });
    
    await Promise.all(fileTasks);    
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lessonNameToClassName(name) {
    let spl = name.split("-");
    spl = spl.map(s => capitalizeFirstLetter(s));
    return spl.join("_");
}

main();
