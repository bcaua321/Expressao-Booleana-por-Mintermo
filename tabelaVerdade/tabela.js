function table(n){
  let array = []; // Array final
  let aux = n.length; // Para auxiliar no preenchimento da tabela 
  let arrayAux = []; // Para preencher a tabela 
  let simb = colunas(n); // Verifica a quantidade de colunas da tabela
  if(simb[1]){
    for(let j = 0; j < simb[0]; j++){
      for(let i in n){
        while(arrayAux.length != n.length){
          let k; 
          for(k = 0; k < aux / 2; k++){  // 4, 2, 1
            arrayAux.push(0);
          }
  
          for(; k < aux; k++){ // 8, 4, 2
            arrayAux.push(1);
          }
        }
      }
      array.push(arrayAux);
      arrayAux = [];
      aux = aux / 2; // 4, 2
    }
  } else {
    return 'Não foi possivel fazer a tabela verdade'; // Se a tabela não corresponder à 2**i = n
  }

  return array;
}

function colunas(n) {
  for(let i = 1; i <= (n.length / 2); i++){
    if(2**i === n.length){
      return [i, true];
    }
  }
  return [0, false];
}

module.exports = {table, colunas}