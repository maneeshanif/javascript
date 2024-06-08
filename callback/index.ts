/* Defination of Callback:-
 A callback function is a function passed into another function as an argument, which is then invoked inside 
the outer function to complete some kind of routine or action*/

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
