// generer un nombre aleatoire entre 10 et 20

let nombreAlea = Math.floor(Math.random() * 51);
let nombre;

do {
    
    nombre = parseInt(prompt("Donner un nombre entre 10 et 20"));
    if(nombre > 20){
        console.log("Plus petit");
    }
    else if(nombre < 10){
        console.log("Plus grand");
    }

} while (nombre !== nombreAlea);

