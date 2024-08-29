function Palidrome(str)
{
     const reveresed = str.split('').reverse().join('');
     return str === reveresed;
}
console.log("is palidrome: " + Palidrome("madam"));