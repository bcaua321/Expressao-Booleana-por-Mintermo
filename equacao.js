const { table } = require('./tabelaVerdade/tabela');
const { colunas } = require('./tabelaVerdade/tabela');


function transforma(n){
  let tabela = table(n);
  let j = colunas(n);
  let letras = verificaLetras(j);
  let eq = n.map((n, index) => {
    if(n == 0) return '';
    return equacao(index, j, tabela, letras);
  });

  return eq.filter(n => { if(n !== '') return n}).join(' + ');
}

function verificaLetras(n){
  const a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

  return a.splice(0, n[0]);
}

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

module.exports = transforma;