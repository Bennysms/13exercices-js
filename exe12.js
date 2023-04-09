let nombres = [];

for (let i = 0; i < 20 ;i++){
    nombres[i] = parseInt(prompt("entrer le nombre numéro "+i));
}

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}