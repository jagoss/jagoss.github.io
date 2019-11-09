document.getElementById("convertir").addEventListener("click", function () {
    const fs = require("fs");
    const text = fs.read
    FileSync("/texts/mytext.txt");
    const textByLine = text.split("\n");
    for (let i = 0; i < textByLine.length; i++) {
        console.log(textByLine[i])
    }
});