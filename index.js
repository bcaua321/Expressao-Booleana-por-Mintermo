const fs = require('fs');
const { table } = require('./tabelaVerdade/tabela');
const { colunas } = require('./tabelaVerdade/tabela');

// await function read(path){
//   const encoding = 'utf8';
  
//   try {
//     const data = await fs.promises.readFileSync(path, encoding)
//     return pegaBin(data);
//   } catch (err) {
//     console.error(err)
//   }
// }

function pegaBin(n){
  let myRegex = /[0-1]/g;
  let arrayResults = [];

  while((temp = myRegex.exec(n)) != null){
    arrayResults.push(parseInt(temp[0]));
  }
  return arrayResults;
}

let a = pegaBin('00101001');
function transforma(n){
  let eq = n.map((n, index) => {
    if(n == 0) return '';
    return equacao(index);
  });

  return eq.join();
}

function verificaLetras(n){
  const a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

  return a.splice(0, n[0]);
}

let tabela = table(a);
let j = colunas(a);
let letras = verificaLetras(j);

function equacao(index){
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

console.log(transforma(a));