const getTheTitles = function(array) {

    //I can use the map() method to code this more easily instead!

    let result = []

    for (i = 0; i < array.length; i++) {
        result[i] = array[i].title;
    }

    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
