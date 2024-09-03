/*
    Given an array and chunk size, divide the array into many subarrays
    where each subarray is of the length chunk size

    *****Examples****

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
    
    HINT ---> slice function
*/

function chunk(array, size)
{
    let arr = [];
    let index = 0;
    while (index < array.length) {
        arr.push(array.slice(index, index+size))
        index += size
    }
    return arr;
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))