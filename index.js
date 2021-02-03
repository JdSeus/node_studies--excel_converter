const fs = require("fs");

fs.readFile("./texto.txt",{encoding: 'utf-8'},(err, data) => {

    if(err) {
        console.log("Ocorreu uma falha durante a leitura do arquivo!");
    } else {
        console.log(data);
    }
});