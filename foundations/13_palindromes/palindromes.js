const palindromes = function (inputText) {
    let newtext = inputText.replace(/[^\w]/g,'').toLowerCase();
    let reversedText = "";
    for (let i = newtext.length; i > 0 ; i--){
        reversedText = reversedText + newtext[i-1];
    }
    if (reversedText == newtext){
        return true
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
