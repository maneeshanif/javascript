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
function Hola(callback: () => void) {
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

let greet1 = (name: string) => {
  console.log(`Hello ${name}!`);
};
function Hola1(callback: (name: string) => void, name: string) {
  callback(name);
}
Hola1(greet, "John");

// 1.1 )lets complete my first project using callback.

/*  In my previous program, I created a simple calculator in two ways: using if-else statements and using a switch case. 
However, in this program, I'm upgrading the calculator by using callbacks instead of the conditional approaches (if-else and switch case)
 I used previously .*/
// some advantages of using callback in this program .
// 1. Code becomes more modular and easier to read and maintain.
// 2. I eassily add new operations without modifying the existing code.
// 3. my code become neat and clean.
// 4. It's easier to reuse the code.
// 5. Callback reduce the complixe use of conditions.
// 6. I can dynamically change my calculator beheviour eg switch from one operation to another.

// here I decalre a type alises for my callback function
type Callback = (x: number, y: number) => number;

// here is individual function for individual operation
// for addition
function addition(num1: number, num2: number) { // Instead of argument, I also have a choice of a default function
  return num1 + num2;
}
//for subtraction
function subtraction(num1: number, num2: number) {
  return num1 - num2;
}
//for multiplication
function multiplication(num1: number, num2: number) {
  return num1 * num2;
}
//for division
function division(num1: number, num2: number) {
  return num1 / num2;
}
// here is the main or callback function
function calculator(operation: Callback) {
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
          setTimeout(() =>{
            console.log('Hello World!');
          }, 2000); // hello world printed after 2 sec