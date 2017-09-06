/*
PROBLEMA 1
Ejemplo
hasUniqueCharacters("String") // true
hasUniqueCharacters("Some String") // false
*/

function noRepeat(string) {
  return string.split("").reduce(function(index, letter){
    var key = letter;
    if (index.temp.indexOf(key) === -1) {
      index.out.push(letter);
      index.temp.push(letter);
    }
    return index;
  }, {temp:[], out:[]}).out;
};


function hasUniqueCharacters(string){
  if(string.length == noRepeat(string).length){
    console.log(string + ": true");
  } else {
    console.log(string + ": false");
  }
};

//PRUEBAS
hasUniqueCharacters("String");
hasUniqueCharacters("Some String");
hasUniqueCharacters("Some string");
hasUniqueCharacters("Some, string ");
hasUniqueCharacters("Some, string,");

/*
PROBLEMA 2
Ejemplo
primeFactors(20) // [2, 2 ,5] es decir, 2*2*5 = 20
primeFactors(330) // [2, 3, 5, 11] es decir, 2*3*5*11 = 330
*/
