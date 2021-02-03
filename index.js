const fs = require("fs");

function modificarUsuario(nome, curso, categoria) {
    fs.readFile("./usuario.json", {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            console.log("Um erro aconteceu!");
        } else {
            var content = JSON.parse(data);
    
            content.nome = nome;
            content.curso = curso;
            content.categoria = categoria;
    
            console.log(content);
    
            fs.writeFile("./usuario.json", JSON.stringify(content), (err) => {
                if (err) {
                    console.log("Um erro aconteceu durante a escrita!");
                }
            });
        }
    })
}

modificarUsuario("Juliano", "Formação Node Js", "Curso da Udemy");