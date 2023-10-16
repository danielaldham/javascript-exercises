const reverseString = function(input) {
    const inputLength = input.length - 1;
    let newString = '';
    for (let i = inputLength; i >= 0; i--) {
        newString += input[i];
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
