var Reader = require("./Reader.js");

var leitor = new Reader();

async function main() {
    var dados = await leitor.Read("./users.csv");
    console.log(dados);
}

main();