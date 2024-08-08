/*
   everything in javascript is objects.
   - objects are used for collection of data, collection of functionality
*/

const person = {
   name : "Duke",
   age : 23,
   
};


console.log(person.age);
console.log(person.name);


let a = null;
console.log(a);

// Boolean and Equality

const agie =14;
const isAge = agie < 18;
const agie1 = '15';
if (isAge) {
   console.log("true value", isAge);
}
else
   console.log("false value: ", isAge)
console.log(agie === agie1); //false bcose it compare both value and type of variables
console.log(agie == agie1); // true bcose it compare only value of variables