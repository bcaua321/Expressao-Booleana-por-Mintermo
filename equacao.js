const { table } = require('./tabelaVerdade/tabela');
const { colunas } = require('./tabelaVerdade/tabela');
const chalk = require('chalk');

function transformaParaEquacao(n){
  let tabela = table(n);
  let j = colunas(n);
  let letras = caractersNecessarios(j);

  // Irá mapear onde tem 1, para assim formar a equação
  let eq = n.map((n, index) => {
    if(n == 0) return '';
    return equacao(index, j, tabela, letras);
  });

  // irá concatenar o array do input já com as equações
  return eq.filter(n => { if(n !== '') return n}).join(chalk.magenta(' + '));
}

// Array para os caracteres necessários de acordo com a saída fornecido pelo usuário
function caractersNecessarios(n){
  const a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X'];
  return a.splice(0, n[0]);
}

// Função de callback para o map, essa função irá substituir o array do input para equação 
function equacao(index, colunas, tabela, letras){
  let concat =  '';
  for(let i in tabela){
    if(tabela[i][index] === 0){
      concat += letras[i] + "'";
    } else {
      concat += letras[i];
    }
  }

  return concat;
}

module.exports = transformaParaEquacao;