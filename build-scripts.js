const fs = require("fs");

const scriptFiles = JSON.parse(
    fs.readFileSync("scripts.json", "utf8")
);

let allScripts = [];

for (const script of scriptFiles) {

    console.log("Loading:", script.file);

    try {

        const data = JSON.parse(
            fs.readFileSync(script.file, "utf8")
        );

        data.push({
            id: "_generator",
            size: script.size
        });

        allScripts.push(data);

    } catch (err) {

        console.error("Failed to parse:", script.file);
        throw err;

    }

}

fs.writeFileSync(
    "scripts-data.json",
    JSON.stringify(allScripts, null, 2)
);

console.log(
    `Built scripts-data.json with ${allScripts.length} scripts`
);
