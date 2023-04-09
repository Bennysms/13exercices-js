let annee = parseInt(prompt("Entrer une année"));

if((annee % 4 == 0 && annee % 100 != 0)||(annee % 400 == 0)){
    console.log("Oui c'est une année bissextile");
}
else{
    console.log("NON ce n'est pas une année bissextile");
}