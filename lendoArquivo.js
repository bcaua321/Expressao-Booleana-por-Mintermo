const fs = require('fs');
const { colunas } = require('./tabelaVerdade/tabela');
const  trataErroExt  = require('./err/erroExt');
const trataErroValor  = require('./err/erroValor');
const trataErroLeitura = require('./err/erroLeitura');

async function leitura(path){
  const encoding = 'utf-8';
  trataErroExt(path);
  try {
    const data = await fs.promises.readFile(path, encoding)
    const a = bin(data);
    return a;
  } catch (err) {
    trataErroLeitura();
  }
}

function bin(n){
  let myRegex = /[0-1]/g;
  let arrayResults = [];

  while((temp = myRegex.exec(n)) != null){
    arrayResults.push(parseInt(temp[0]));
  }
  
  return arrayResults;
}

module.exports = leitura;