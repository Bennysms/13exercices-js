// l'entrée d'un nombre par l'utimlisateur

let nombre = parseInt(prompt("Entrer un nombre"));

// la variable qui fait la somme des entiers
let somme = 0;


// La boucle qui calcule la somme des entiers

for (let i = 1; i <= nombre; i++) {
    somme+=i;
}
console.log("La somme des entiers jusqu'à "+nombre+ " est "+somme);