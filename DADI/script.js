//scegli un numero
let userInput=8;


for(;userInput<=1 || userInput>=7;) //finchè non inserisco un numero da 1 a 6 reitera l'input
{
    userInput = parseInt(prompt("inserisci un numero da 1 a 6"));
}

const randomNumber= Math.floor((Math.random() * 5)+1);
console.log(userInput,randomNumber);


//confronto il numero random con il numero scelto dall'utente
if(randomNumber<userInput)
{
    console.log("Hai vinto!");
}
else if(randomNumber==userInput){
    console.log("Pareggio")
}
else
{
    console.log("Hai perso!");
}


