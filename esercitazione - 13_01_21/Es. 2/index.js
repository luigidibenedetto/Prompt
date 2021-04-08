let valorePrompt = prompt('Inserisci un numero: ');

// let valoreInNumero = parseInt(valorePrompt);

// console.log(valoreInNumero);

if (!isNaN(valorePrompt)) {
    console.log('Complimenti, il valore inserito è valido!');
}
else{
    console.log('Errore: il valore inserito non è valido!');
}
