// calculator using function and if else . 
// here is individual function for individual operation
// for addition
function addition(num1, num2) {
    return num1 + num2;
}
//for subtraction
function subtraction(num1, num2) {
    return num1 - num2;
}
//for multiplication
function multiplication(num1, num2) {
    return num1 * num2;
}
//for division
function division(num1, num2) {
    return num1 / num2;
}
// here is the main or callback function
function calculator(operation) {
    console.log(operation(6, 1));
}
// here I call the callback function with individual operation
calculator(addition);
export {};
