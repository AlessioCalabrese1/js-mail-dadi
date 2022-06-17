let userMail = prompt("Inserire l'email dell'utente");
let mailComparison = ["alessiocalabrese07@gmail.com", "gigginothebest@hotmail.com", "markuscron73@gmail.com"];
console.log(mailComparison);

let i = mailComparison.indexOf(userMail);
if (i != -1) {
    console.log("La mail è verificata!")
}else{
    console.warn("La mail NON è verficata!")
}