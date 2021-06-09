// Function declaration
function squared1(number1, number2){
    square1 = number1 * number1;
    square2 = number2 * number2;
    total1 = square1 + square2;
    return total1 * total1;
}
console.log(squared1(2, 4));



// Function declaration
const squared2 = function(number3, number4) {
    square3 = number3 * number3;
    square4 = number4 * number4;
    total2 = square3 + square4;
    return total2 * total2;
};
console.log(squared2(2, 4));


// Arrow function (also function expression)
const squared3 = (number5, number6) => {
    square5 = number5 * number5;
    square6 = number6 * number6;
    total3 = square5 + square6;
    return total3 * total3;
}
console.log(squared3(2, 4));
