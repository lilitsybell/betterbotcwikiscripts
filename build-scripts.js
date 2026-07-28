const fs = require("fs");


// Load script index
const scriptList = JSON.parse(
    fs.readFileSync("scripts.json", "utf8")
);


let allScripts = [];


for (const entry of scriptList) {


    // Load the actual script file
    const data = JSON.parse(
        fs.readFileSync(entry.file, "utf8")
    );


    // Add generator metadata
    data.push({

        id: "_generator",

        size: entry.size || "full"

    });


    allScripts.push(data);


}



fs.writeFileSync(
    "scripts-data.json",
    JSON.stringify(allScripts, null, 2)
);


console.log(
    `Built scripts-data.json with ${allScripts.length} scripts`
);
