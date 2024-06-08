/* Defination of Callback:-
 A callback function is a function passed into another function as an argument, which is then invoked inside
the outer function to complete some kind of routine or action*/
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
