const fs = require("fs");

const scriptFiles = JSON.parse(
    fs.readFileSync("scripts.json", "utf8")
);

let allScripts = [];

for (const file of scriptFiles) {

    const data = JSON.parse(
        fs.readFileSync(file, "utf8")
    );

    allScripts.push(data);

}


fs.writeFileSync(
    "scripts-data.json",
    JSON.stringify(allScripts, null, 2)
);


console.log(
    `Built scripts-data.json with ${allScripts.length} scripts`
);
