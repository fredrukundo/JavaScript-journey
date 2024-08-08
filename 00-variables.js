let name = "fred"; // let and const are block scoped i.e they are available inside {}
const age = 26;
console.log("hello there my name is: ", name, "i am ", age, "years old");

const nmbr = 20;
console.log("const var: ", nmbr)

// you can use a variable without declaring it
dog = "ceduu";
console.log("my dog's name is ", dog); // this variable is globaly available unlike let which is scoped block

/*
   TYPES of Variables

   1. string
   2.Number
   3. object
   4.Boolean
   5.undefined
   6.null

   everythin is Primitive type except Object
   the object is special one
*/


// muilt lines string
const song = `oh
i like
pizza
and
apple
`

console.log(song);

// string concatenation

const s1 = "firstName: ";
const name1 = "fred";

const s2 = "lastName: ";
const name2 = "RUKUNDO"

console.log(s1 + name1);
console.log(s2 + name2);
const agee = 26;
const hello = `hello my names are ${name1} ${name2} , nice to meet you. I am ${agee} years old`;
console.log(hello);

// 2.NUMBERS

const ages = 12;
const money = 100.23;

console.log(typeof ages);
console.log(typeof money);

const nmbrz = Math.random();

console.log(nmbrz);
console.log(Math.round(nmbrz));
console.log(Math.floor(nmbrz));
console.log(10 / 'dog');