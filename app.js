// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))



const fromDollarToYen = function (valueinyen) {
    let valueindollar = valueinyen * 106.6
    return valueindollar
}

const fromEuroToDollar = function (valueineuro) {
    let valueindollar = valueineuro * 1.2
    return valueindollar
}

const fromYenToPound = function (valueinpound) {
    let valueinyen = valueinpound * 159.9
    return valueinyen
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };