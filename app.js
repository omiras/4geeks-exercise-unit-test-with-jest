// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){

    if (valueInEuro<0) {
        throw Error('Negative amount can not be converted');
    }

    if (valueInEuro > Number.MAX_SAFE_INTEGER) {
        throw Error('Conversion amount is too high');
    }

    if (typeof(valueInEuro)!='number') {
        throw Error('Function does require a number');

    }

    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInYens = valueInEuro * oneEuroIs.JPY;
    // retornamos el valor
    return valueInYens;
}


// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar, fromEuroToYen }