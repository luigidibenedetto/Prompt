let valorePrompt = prompt('Inserisci un numero: ');

let valoreIntero = parseInt(valorePrompt);

function IsNotUneven(numero)
{
    if (isNaN(numero) == false)
    {
        return (numero %2 == 1 ?  true : false);
    }
    else
    {
        return null;
    }
}

let numeroDispari = IsNotUneven(valorePrompt);

console.log('valore inserito: ', valorePrompt + ' -- valore intero: ', valoreIntero + ' -- èNumeroDispari? : ', numeroDispari);

if (!isNaN(valorePrompt) && (valorePrompt == valoreIntero)) 
{ // !isNaN = valido
  // console.log('Complimenti, il valore inserito è un intero valido!');
    if (numeroDispari)
    {
        console.log('Complimenti, il valore inserito è un intero valido ed è un numero dispari!');
    }
    else 
    {
        console.log('Complimenti, il valore inserito è un intero valido ed è un numero pari!');
    }

} else if (!isNaN(valorePrompt) && (valorePrompt != valoreIntero)) 
        {
            console.log('Il valore inserito è valido ma non intero!');
        }   else if (isNaN(valorePrompt))  
                    {
                        console.log('Errore: il valore inserito non è valido!');
}
else 
{
    console.log('Errore: il valore inserito non è un intero valido!');
}
