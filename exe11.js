// l'entrée d'un nombre par l'utimlisateur

let nombre = parseInt(prompt("Entrer un nombre"));

// la variable qui fait la somme des entiers
let produit = 1;


// La boucle qui calcule la factorielle

for (let i = 1; i <= nombre; i++) {
    produit*=i;
}
console.log(nombre+ " factorielle donne "+produit);