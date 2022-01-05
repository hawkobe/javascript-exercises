const ftoc = function(degree) {
    let celsius = (degree - 32) * 5/9;
    let celsiusOneDec = Number(celsius.toFixed(1));
    return celsiusOneDec;
};

const ctof = function(degree) {
    let fahrenheit = degree * 9/5 + 32;
    console.log(fahrenheit);
    let fahrenheitOneDec = Number(fahrenheit.toFixed(1));
    return fahrenheitOneDec;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
