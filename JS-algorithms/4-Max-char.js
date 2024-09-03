/*
    return a character that is the most commonly repeatedly in the string
    ex:
        abccccccccdd = c
        apple 12311111 = 1
*/
function MaxChar(str)
{
    const charMap = {}
    let count = 0
    let MaxChar = ''
    for (let char of str){
        if (charMap[char]) {
            charMap[char] = ++charMap[char]
        } else {
            charMap[char] = 1
        }
    }
    //iterate through the charMap obj to find the repeated value in it
    for (let key in charMap)
    {
        if (charMap[key] > count){
            count = charMap[key]
            MaxChar = key
        }
    }
    return MaxChar
}

console.log(MaxChar("apple 23211   22341121233333"))
