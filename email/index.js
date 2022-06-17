let userMail = prompt("Inserire l'email dell'utente");
let mailComparison = ["alessiocalabrese07@gmail.com", "gigginothebest@hotmail.com", "markuscron73@gmail.com"];
console.log(mailComparison);
let judgement = false;

for (let index = 0; index < mailComparison.length; index++) {
    if (userMail === mailComparison[index]) {
        judgement = true;
    }
}

if (judgement === true) {
    console.log("La mail è verificata!")
}else{
    console.log("La mail NON è verificata!")
}