const chalk = require('chalk');

function trataErroLeitura(){
  throw new Error(chalk.bgRedBright('Erro na leitura, verifique se o caminho foi inserido corretamente.'));
}

module.exports = trataErroLeitura;