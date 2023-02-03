test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

test("0 euro should be 0 dollars", function () {
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(0)).toBe(0);
});

test("One euro should be 127.9 yens", function () {
    // importo la funcion desde app.js
    const { fromEuroToYen } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToYen(1)).toBe(127.9); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});



it('should throw an exception if a negative amount of euros are passed', () => {
    const { fromEuroToDollar } = require('./app.js')

    expect(
        () => fromEuroToDollar(-1) // Do not simply call func
    ).toThrow();
});

it('should throw an exception if a too much high number is passed', () => {
    const { fromEuroToDollar } = require('./app.js')

    expect(
        () => fromEuroToDollar(Number.MAX_SAFE_INTEGER + 1) // Do not simply call func
    ).toThrow();
});

it('should throw an exception if anything but a number is passed', () => {
    const { fromEuroToDollar } = require('./app.js')

    expect(
        () => fromEuroToDollar("1") // Do not simply call func
    ).toThrow();
});
