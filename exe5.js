// les entrées de a, b et c

let a = parseInt(prompt("Entrer la valeur de a"));
let b = parseInt(prompt("Entrer la valeur de b"));
let c = parseInt(prompt("Entrer la valeur de c"));

console.log("Calcule du Delta");

// calcule du delta
let delta = Math.pow(b,2)-4*a*c;

if(delta > 0){
    let S1,S2;
    S1 = (-b + Math.sqrt(delta))/ 2*a;
    S2 = (-b - Math.sqrt(delta))/ 2*a;

    console.log("La prémière solution est "+S1);
    console.log("La deuxième solution est "+S2);
    
}
else if(delta === 0){
    let S;
    S = -b/(2 * a)
    console.log("La solution unique est "+S);
}
else{
    console.log("Pas de solution possible");
}
