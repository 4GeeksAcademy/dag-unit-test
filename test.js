// Import the function sum from the app.js file
const { sum,  fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1000 dollars is around 146261 yens", () => {
    const yen = fromDollarToYen(1000);
    const expected = (1000 / 1.07 ) * 156.5;
    console.log(expected);
    expect(yen).toBe(expected);
})

test("100000 yen is around 555 pounds", () => {
    const pound = fromYenToPound(100000);
    const expected = (100000 / 156.5) * 0.87;
    console.log(expected);
    expect(pound).toBe(expected);
})