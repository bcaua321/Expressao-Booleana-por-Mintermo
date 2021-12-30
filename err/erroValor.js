const chalk = require('chalk');

// Para tratar o erro no caso de que os inputs não sejam válidos.
function trataErroValor(){
  throw new TypeError(chalk.bgRedBright('O valor não corresponde a um saída de tabela verdade válida!'));
}

module.exports = trataErroValor;