  // calculator using function and if else . 

// function calculate(num1:number,num2:number,operator:string) {
//    if (operator === "+") {
//       return num1 + num2;
//     } else if (operator === "-") {
//       return num1 - num2;
//     } else if (operator === "*") {
//       return num1 * num2;
//     } else if (operator === "/") {
//         return num1 / num2;
//     }
//      else {
//       return "Error: Invalid operator";
//     }
//   }
//   const result = calculate(12, 3,"*");
//   console.log(result);

// ---------------------------------------------------------------------------------------------------------------------------------------------

  // calculator using function and switch case

// function calculater(num1: number, num2: number, operator: string) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//       break;
//     case "-":
//       return num1 - num2;
//       break;
//     case "*":
//       return num1 * num2;
//       break;
//     case "/":
//       return num1 / num2;
//       break;
//     default:
//       return "Error: Invalid operator";
//   }
// }
// const result = calculater(5, 3, "+");
// console.log(result);

// ------------------------------------------------------------------------------------------------------------------------------------------

/* A callback function is a function passed into another function as an argument, which is then invoked inside 
the outer function to complete some kind of routine or action*/

/*  so here i use callback funtion to make a simple calculator */
  
// here I decalre a type alises for my callback function
type Callback =  (x:number,y:number)=> number

// here is individual function for individual operation
// for addition
function addition(num1:number , num2:number){  // Instead of argument, I also have a choice of a default function
return num1 + num2;
}
//for subtraction
function subtraction(num1:number , num2:number){
return num1 - num2;
 }
 //for multiplication
 function multiplication(num1:number , num2:number){
return num1 * num2;
 }
 //for division
 function division(num1:number , num2:number){
return num1 / num2;
}
// here is the main or callback function
function calculator(operation:Callback){
   console.log(operation(6,1));
}

// here I call the callback function with individual operation
calculator(addition); 

