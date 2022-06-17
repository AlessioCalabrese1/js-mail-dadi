let userNumber = Math.floor((Math.random() * 6) + 1);
let botNumber = Math.floor((Math.random() * 6) + 1);

if(userNumber > botNumber) {
    console.log("Ha vinto l'utente!");
} else if(userNumber < botNumber){
    console.log("Ha vinto il bot!");
} else {
    console.log("L'utente e il bot hanno pareggiato!");
}