const trataErroValor = require('../err/erroValor');
function table(n){ 
  let array = []; // Array final
  let aux = n.length;  // Para auxiliar no preenchimento da tabela 
  let arrayAux = []; // Para preencher o array a respectiva letra
  let simb = colunas(n); // Verifica a quantidade de colunas da tabela [quantidade, boolean(caso seja uma tabela válida)]

  if(simb[1]){
    for(let j = 0; j < simb[0]; j++){
      while(arrayAux.length != n.length){ 
        let k; 
        for(k = 0; k < aux / 2; k++){  //  
          arrayAux.push(0);
        }
  
        for(; k < aux; k++){ // 
          arrayAux.push(1); 
        }
      }
      array.push(arrayAux);
      arrayAux = [];
      aux = aux / 2; // 4, 2
    }
  } else {
    trataErroValor(); // Se a tabela não corresponder à 2**i = n
  }

  return array;
}

// Função que irá retornar a quantidade de letras necessárias para fazer a montagem da equação a partir do número de colunas
function colunas(n) {
  for(let i = 1; i <= (n.length / 2); i++){
    if(2**i === n.length){
      return [i, true];
    }
  }
  return [0, false];
}

module.exports = {table, colunas}