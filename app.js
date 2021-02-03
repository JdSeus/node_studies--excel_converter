var Reader = require("./Reader.js");
var Processor = require("./Processor");
var Table = require("./Table");

var leitor = new Reader();

async function main() {
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    console.log(usuarios.ColumnCount);
    console.log(usuarios.RowCount);
}

main();