const transforma  = require('./equacao');
const leitura  = require('./lendoArquivo');

const caminho = process.argv; // Para ter o caminho do arquivo quando for executar com o comando

async function processaTexto(path){
  const arrayInput = await leitura(path[2]);
  const array = transforma(arrayInput);
  console.log(array);
} 

processaTexto(caminho);

