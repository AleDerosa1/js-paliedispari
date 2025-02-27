//RACCOLTA DATI
// chiedere all'utente di scegliere tra pari e dispari
// dopodichè chiedere di inserire un numero da 1 a 6
// generare un numero random dal computer

const paridispari = prompt("Scegli tra pari e dispari");
const numeri = prompt("Scegli un numero da 1 a 6");
console.log(paridispari, numeri);

//ESECUZIONE LOGICA
// sommare i due numeri (numero scelto dall'utente/numero random)
// definire se la somma dei due numeri è pari o dispari
// dichiarare chi ha vinto

const numero1 = numeroRandom(1,6);
console.log(numero1);

const somma = numero1 + parseInt(numeri);
console.log(somma);

const risultato = controlloSomma(somma);
console.log(risultato);




if (paridispari === risultato) {
    console.log("Hai vinto");
    
} else {
    console.log("Hai perso");
    
}





function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function controlloSomma (somma) {
    let risultato = "";
    if (somma % 2 === 0) {
        risultato = "pari"; 

    } else {
        risultato = "dispari";
    } 
    return risultato;
       
  } 


