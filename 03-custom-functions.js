/*
   custom functions

*/

function addNumber(a,b)
{
   return a + b;
}

console.log("sum: ", addNumber(12,10));

function calcBill()
{
   const tot = 100 * 20;
   return tot;
}

console.log("The Bills: ",calcBill());

function greeting(name)
{
   console.log("hello " + name + " how are you")
}
greeting("fred");

// Arrow Functions (ES6)

const greet = (name) => {
   console.log("Hello, " + name + " !");

}

greet("duke fred");

let sum = (a,b) =>{
   let s;
    s = a + b;
   console.log("sum of two numbers " + a + " and " + b + " = ", s);
}

sum(10,20);

// Default Parameters(ES6)

let testss = (name = "fred by default") => {
   console.log("Hello " + name + " how are you")
}

testss();
testss("duke");

// RUCURSION 

function factorial(n)
{
   if (n == 0)
         return 1;
   else
      return n * factorial(n - 1);
}

console.log("factorial: ", factorial(5));

// rucursion using arrow
const fact = (n) => {
   if (n == 0)
         return 1;
   else
      return n * fact(n - 1);
}
console.log("using arrow fact: ", fact(5));