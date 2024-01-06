const { sum } = require('./app.js');

test ('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.09 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.09; 
    
     expect(fromEuroToDollar(3.5)).toBe(3.8150000000000004); 
});

test("One dollar should be 144.84 yen", function() {
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(3.5)

    const expected = 3.5 * 144.84; 
    
     expect(fromDollarToYen(3.5)).toBe(506.94); 
});

test("One yen should be 0.00544 pound", function() {
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(3.5)

    const expected = 3.5 * 0.00544; 
    
     expect(fromYenToPound(3.5)).toBe(0.01904); 
});