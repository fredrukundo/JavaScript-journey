/* Given a string, return a new string with the reversed order of characters
example:
reverse("hi") === 'ih'
reverse("hello") === "elloeh"
*/

function rev0(str){
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}
function rev1(str)
{
    let rev = '';
    for( let char of str)
         rev = char + rev;
    return rev;
}
// using the built in function (reverse()), but it is specific used for Arrays
//we will have to change string into array, reverse it and put it to strings

// split it, reverse it and join it bck

function builtInReverse(str)
{
    return str.split('').reverse().join('');
}

console.log(builtInReverse("helloo"));
console.log(rev0("helloo"));
console.log(rev1("helloo"));

function rev2(arr)
{
    return arr.reverse();
    
}
let arr =['apple1','apple2', 'apple3'];
let arrNmbr = [1,2,3,4,5,6,7,8,9,10];
console.log("reversed array = " + rev2(arr));
console.log("reversed array = " + rev2(arrNmbr));
