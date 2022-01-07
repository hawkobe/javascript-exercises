const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return (oldestAge < currentAge) ? current : oldest;
    });


    function getAge(birthYear, deathYear) {
        if (!deathYear) {
            deathYear = new Date().getFullYear();
        }
        return deathYear - birthYear;
    }

  // SOMEHOW USE THE REDUCE FUNCTION. READ ABOUT IT.

  //need to pull info from arrays
        //probably use people.map((name, yearOfBirth, yearOfDeath) => {
                //people.yearOfBirth
                //people.yearOfDeath
                //people.name
                //}
  //need to calculate age of person in array using birth and death years
        //age = deathYeah - birthYear
  //need to compare the ages of the different people in the array to find highest

  //will need to use a Date() method for people with no death year
  //
};

// Do not edit below this line
module.exports = findTheOldest;
