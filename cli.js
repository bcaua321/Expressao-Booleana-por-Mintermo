const  transforma  = require('./equacao');
const  read  = require('./lendoArquivo');

const caminho = process.argv;

async function processaTexto(path){
  const arrayInput = await read(path[2]);
  const array = await transforma(arrayInput);

  console.log(array);
} 

processaTexto(caminho);

