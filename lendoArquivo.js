const fs = require('fs'); 

async function read(path){
  const encoding = 'utf-8';
  
  try {
    const data = await fs.promises.readFile(path, encoding)
    return bin(data);
  } catch (err) {
    console.error(err);
  }
}

function bin(n){
  let myRegex = /[0-1]/g;
  let arrayResults = [];

  while((temp = myRegex.exec(n)) != null){
    arrayResults.push(parseInt(temp[0]));
  }
  return arrayResults.length === 0 ? 'Não foram encontradas': arrayResults;
}

module.exports = read;