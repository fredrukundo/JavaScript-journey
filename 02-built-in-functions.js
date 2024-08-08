/*
   1. String functions

   - charAt(index)
   - concat(s1,s2)
   - includes(searchingString, position)
   - indexOf(searchValue, fromIndex)
   - slice(startIndex, endIndex)
   - toLowerCase(), toUpperCase()
*/

let str = "Hello"
console.log("char At index 0: ",str.charAt(0));

let s1 = "Hello";
let s2 = "there";
console.log("use of concat(): ",s1.concat(" ", s2));

str = "Hello zorld";
console.log("if it includes: ", str.includes("World"));

console.log("index of: ", str.indexOf("World"));

console.log("use of slice(): ", str.slice(3,7));

console.log("capital: ", str.toUpperCase());
console.log("lowerCase: ", str.toLowerCase());


/*
   2. Array functions
   - push(), pop()
   - shift, unshift() : same as push and pop the dffrnce is pop,push uses LIFO
   while other uses FIFO

   - slice(startIndex, endIndex)
   - forEach(callBack)
   - map(callBack)
   - filter(callBack)

*/
   let arr = [1,2,3,4,5,6,7,8,9,0];
  console.log("i pushed at: " ,arr.push(13));
  console.log("array: ", arr);

  console.log("i poped out: " ,arr.pop());
  console.log("array: ", arr);

  console.log("i shifted out: " ,arr.shift());
  console.log("array: ", arr);

  console.log("i unshifted in: " ,arr.unshift(20));
  console.log("array: ", arr);

  console.log(arr.slice(2,6));

  arr.forEach(elem => console.log(elem * 2));
 let newArr = arr.map(x => x * 2);
console.log("new arr:", newArr);

let filteredArr = arr.filter(x => x > 12);
console.log("filtered Arr: ", filteredArr);

/*
   3. Math functions
   - Math.max(), Math.min()
   - Math.round(), Math.floor()
   - Math.random()
*/

console.log("max: ",Math.max(1, 0, 7, 100, 80));
console.log("min: ",Math.min(1, 0, 7, 100, 80));

console.log("round: ",Math.round(12.563456));
console.log("round: ",Math.floor(12.963456));
/*
   4. Date functions
*/

let now = new Date();
console.log("Date: ", now);
console.log("year: ", now.getFullYear());
console.log("Month: ", now.getMonth());
console.log("day: ", now.getDate());
console.log("Hour: ", now.getHours());
/*
   5. JSON functions
   - JSON.parse(jsonString) returns object
   - JSON.stringify(object)
*/

let jsonString = '{ "name": "Fred", "age": 23}';
let ob = JSON.parse(jsonString);
console.log(ob);

let ob1 = {
   name: "Duke",
   school: "1337",
   level: 5
};
let jsonStrings = JSON.stringify(ob1);
console.log(jsonStrings);