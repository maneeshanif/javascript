/*  1) Callbacks :-
      A callback is a function that is passed as an argument to another function,
       and executed by that function at a given point.
        ""plus point"" >> It allows us to execute a function at a later time, rather than immediately.


     2)  High order function
    A higher-order function is a function that takes another function as an argument, or returns a function
    as a result. In other words, a higher-order function is a function that operates on other
    functions, either by taking them as arguments or by returning them as output.

    lets understand it with example :
   
    */
// simple call back function ..
// program 1
let greet = () => {
    console.log("Hello World");
};
function Hola(callback) {
    callback();
}
Hola(greet); // here we got print out of our legendary word of programing "hello World🎉" .. and here our main callback is being used.
/*
In program 1, we see a very simple callback function in TypeScript.
 So, I have a question: is the function Hola a callback function?

 No, it's not. Hola is a higher-order function because it takes a function as an
 argument. The function greet is the callback function because it's being passed as an argument to Hola
*/
// as we learn typescript and in typescript assigning type is a big headache. what if my callback funtion  also want some argument
//program 2
let greet1 = (name) => {
    console.log(`Hello ${name}!`);
};
function Hola1(callback, name) {
    callback(name);
}
Hola1(greet, "John");
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
// lets move to setTimeout function even all youtube channels use settimeout function when its come to callback but 
//i try without using it in above program
/* 1.2 SetTimeout function:------------
setTimeout is a function that executes a callback function after a specified delay (in milliseconds).

The general syntax of setTimeout is as follows:
setTimeout(callbackFunction, delayTime, arguments)
*/
// here is the example of setTimeout function
setTimeout(() => {
    console.log('Hello World!');
}, 2000); // hello world printed after 2 sec
export {};
