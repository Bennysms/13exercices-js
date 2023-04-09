// partie A
let x = prompt("Entrer un nombre");
let nombre = parseInt(x);
console.log("La suite de nombres pairs");
console.log("-------------------------");
for (let i = 0; i <= nombre; i++) {
    if(i%2 == 0){
        console.log(i);
    }
}
console.log("--------------------------");

console.log("La suite de nombres impairs");

// partie B

for (let i = 0; i <= nombre; i++) {
    if(i%2 != 0){
        console.log(i);
    }
}