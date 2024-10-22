const palindromes = function (str) {
    let strCharsArray = str.toLowerCase().split('').filter(char => /^[a-zA-Z]$/.test(char));
    let strCharsArrayReversed = str.toLowerCase().split('').filter(char => /^[a-zA-Z]$/.test(char)).reverse();
    
    return strCharsArray.join('') === strCharsArrayReversed.join('');
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'))

// Do not edit below this line
module.exports = palindromes;
