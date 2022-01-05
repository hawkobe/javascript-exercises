const removeFromArray = function(array, ...args) {
    for (let i = 0; i < args.length; i++) {
    let arrayIndex = array.indexOf(args[i]);
    if (arrayIndex >= 0) {
        array.splice(arrayIndex, 1);
        }
    }

    return array;
    //console.log(args);
};

// Do not edit below this line
module.exports = removeFromArray;
