const transforma  = require('./equacao');
const leitura  = require('./lendoArquivo');

const caminho = process.argv;

async function processaTexto(path){
  const arrayInput = await leitura(path[2]);
  const array = await transforma(arrayInput);
  console.log(array);
} 

processaTexto(caminho);

