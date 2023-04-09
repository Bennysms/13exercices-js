// entrée de deux variables

let var1 = parseInt(prompt("Entrée la première valeur"));
let var2 = parseInt(prompt("Entrée la deuxième valeur"));

  // création d'une variable temporaire
  let x;

console.log("la valeur de la première entrée avant l'échange "+var1);
console.log("la valeur de la deuxième entrée avant l'échange "+var2);

console.log("------------------------");

x = var1;
var1 = var2;
var2 = x;

console.log("la valeur de la première entrée avant l'échange "+var1);
console.log("la valeur de la deuxième entrée avant l'échange "+var2);