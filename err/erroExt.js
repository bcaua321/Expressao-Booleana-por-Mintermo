const path = require('path')
const chalk = require('chalk');

// para tratar error de extensão de arquivo
function trataErroExt(caminho){
  const baseName = path.basename(caminho);
  const ext = path.extname(baseName);

  if(ext != '.txt') throw new Error(chalk.bgRedBright('O arquivo precisa ser da extensão ".txt"'));
}

module.exports = trataErroExt;