console.log('Js ok');
// parola palindroma

const checkBtn = document.querySelector('#check-btn');
checkBtn.addEventListener('click', function () {
    const string1 = document.querySelector('#word').value;
    const string2 = reverseString(string1);
    let result = document.querySelector('#result');
    if (string1 === '') {

        result.innerText = 'Inserire una parola!';

    } else if (string1.toUpperCase() === string2.toUpperCase()) {
        result.innerText = 'La parola è palindroma!';

    } else {
        result.innerText = 'La parola non è palindroma!';
    }
})
// funzione per invertire la stringa!
function reverseString(str) {
    let revStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

// Esercizio 2


const btn = document.querySelector('#btn2');
const result2 = document.querySelector('#result2');

btn.addEventListener('click', function () {
    const number = document.querySelector('#number').value;
    const selected = document.querySelector('#mySelection').value;
    const pcnumber = Math.floor(Math.random() * 5) + 1;
    const pcGen = document.querySelector('#pc-gen');
    pcGen.innerText = `Numero Generato dal Computer: ${pcnumber}`;
    console.log('numero PC', pcnumber);
    const somma = parseInt(number) + parseInt(pcnumber);

    res = EvenOdd(somma);
    // controllo se il risultato della funzione EvenODD è uguale a quello selezionato dall'utente
    if (res === selected) {
        console.log("hai vinto");
        result2.innerText = 'Hai vinto';
    } else {
        console.log('hai perso');
        result2.innerText = 'Hai perso';
    }
})



// Funzione EvenODD

function EvenOdd(nmbr) {
    let result = '';
    if (nmbr % 2 === 0) {
        return result = 'PARI';
    } else {
        return result = 'DISPARI';
    }
}






