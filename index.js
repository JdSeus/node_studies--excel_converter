const fs = require("fs");

fs.writeFile("./texto.txt", "Novo conteúdo do arquivo!", (err) => {
    if (err) {
        console.log("Erro durante o salvamento...");
    }
});