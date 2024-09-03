/*
    Arrays Searching Methods
    1. IndexOf()
    2.lastIndexoF()
    3.find()
    4.filter()
    5.every()
    6.includes()
    7.
*/

// 1. indexOf():  method searches an array for an element value and returns its position
console.log("METHOD 1")

let arr1 = ["Apple", "Mango", "Orange","Orange", "Peach"];

console.log(arr1.indexOf("banana")); // output = -1
console.log(arr1.indexOf("Orange")); // output = 2

console.log("METHOD 2")

// 2. lastIndexOf():returns the position of the last occurrence of the specified element

let arr2 = ["Apple", "Mango", "Peach","Orange", "Peach"];

console.log(arr2.lastIndexOf("Peach")); //output = 4
console.log(arr2.lastIndexOf("banana")); // output = -1

console.log("METHOD 3")

// 3.find(), findIndex(), findLast(), findLastIndex()

let numbers = [4, 9, 16, 25, 29];

let first = numbers.find(value => value > 10);
console.log(first); // output = 16

let firstIndex = numbers.findIndex(value => value > 10)
console.log(firstIndex) // output = 2

let last = numbers.findLast(value => value > 10)
console.log(last) // output = 29

let lastIndex = numbers.findLastIndex(value => value > 10)
console.log(lastIndex) // output = 4

// 4. includes : allows us to check if an element is present in an array

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("Peach")); // false

// 5. filter() : returns all elements that pass a test

let numbers2 = [4, 9, 16, 25, 29];
let result = numbers2.filter(value => value > 10) // output [16, 25,29]
console.log(result)

//6. every(): checks if every elements in the array pass a test

let numbers3 = [4, 9, 16, 25, 29];
 let answer = numbers3.every(value => value > 0)
 console.log(answer) // true

 
