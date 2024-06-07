// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b;
}

// Just a console log for ourselves
console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

function fromDollarToYen (dollars){
    const euros = dollars / 1.07;
    const yen = euros * 156.5;
    return yen;
}

function fromYenToPound (yen){
    const euros = yen / 156.5;
    const pound = euros * 0.87;
    return pound;
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };