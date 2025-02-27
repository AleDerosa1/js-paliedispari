//RACCOLTA DATI
// chiedere a utente una parola (anna oppure alessandro)
// controllare se la parola inserita è palindroma o no
const parola = prompt('Inserisci una parola per controllare se é palindroma'); // > anna: true


//ESECUZIONE LOGICA
// se la parola inserita è palindroma stampare la parola 
// altrimenti stampare "la parola inserita non è palindroma"



let parolaInverita = invertiparola(parola);
if (parolaInverita === parola) {
    console.log("la parola " + parola + " è palindroma");
 
} else {
    console.log("la parola " + parola + " non è palindroma");
}





function invertiparola(parola) {
    let inverso = "";
    for (let i = parola.length -1; i >= 0; i--) {
        inverso = inverso + parola.at(i);
    }
    return inverso;
}



// OUTPUT
// avere console log con risultato