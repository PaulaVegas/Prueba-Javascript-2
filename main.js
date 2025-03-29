// Ejercicio 1:
// Diseña un algoritmo que cuente las veces
// que aparece una determinada letra en una frase

function countOccurrences(phrase, letter) {
  let arrPhrase = phrase.split("");
  let counter = 0;
  for (let i = 0; i < arrPhrase.length; i++) {
    if (arrPhrase[i].includes(letter)) {
      counter++;
    }
  }
  return counter;
}
console.log(countOccurrences("Hello World", "W"));

// Ejercicio 2:
// Diseña un algoritmo que imprima los números impares
// entre un número dado por el usuario y los siguientes
// 50 números

function oddNumbers(number) {
  let result = [];
  for (let i = number; i <= number + 50; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(oddNumbers(5))