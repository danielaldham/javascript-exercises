const removeFromArray = function() {
    let array = arguments[0];
    let lose = [];
    let final = [];
    for (let i = 1; i < arguments.length; i++) {
        lose.push(arguments[i]);
    }
    console.log(array)
    console.log(lose)
    for (const i of array) {
        if (lose.indexOf(i) === -1) {
            final.push(i)
        }
    }
    return final;
};

// Do not edit below this line
module.exports = removeFromArray;
