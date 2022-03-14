console.log('Js ok');


const checkBtn = document.querySelector('#check-btn');
checkBtn.addEventListener('click', function () {
    const string1 = document.querySelector('#word').value;
    const string2 = reverseString(string1);
    let result = document.querySelector('#result');
    if (string1.toUpperCase() === string2.toUpperCase()) {
        result.innerText = 'La parola è palindroma!';
        result.style.color = 'lightblue';

    } else {
        result.innerText = 'La parola non è palindroma!';
        result.style.color = 'red';
    }
})
function reverseString(str) {
    let revStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}





