//Chiedi all’utente la sua email

let userEmail = prompt("inserisci la tua e-mail");

//controlla che sia nella lista di chi può accedere

let allowedUsers = [
    "gianni", 
    "luca", 
    "fabrizio"
];

let allowed=false;

for(i=0;i<allowedUsers.length ;i++){
    if(userEmail==allowedUsers[i]){
        allowed=true;
    }
}

//se allowed è true, quindi la mail è presente (o il nome in questo caso), l'accesso è consentito
if(allowed){
    console.log("accesso consentito");
}
else{
    console.log("accesso negato");
}