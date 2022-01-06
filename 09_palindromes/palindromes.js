const palindromes = function (str) {
    //use regex to get string without punctuation
    const noPunctStr = str.replace(/[^\w]/gi, '');
    const noPunctStrCap = noPunctStr.toUpperCase();

    let result = ''

    let splitStr = noPunctStrCap.split('');
    let reverseArray = splitStr.reverse();
    let joinArray = reverseArray.join('');

    for (let i = 0; i < noPunctStrCap.length -1; i++) {
        if (joinArray.charAt(i) == noPunctStrCap.charAt(i)) {
            result = true;
        } else {
            result = false;
            break;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = palindromes;
