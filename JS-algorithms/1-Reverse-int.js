function intRev(nbr)
{
    const reveresed = nbr.toString().split('').reverse().join('');
    return parseInt(reveresed) * Math.sign(nbr);
}

console.log("int reverse: " + intRev(-90));

function intRev2(n)
{
    let rev = n.toString();
    let res = '';
    for (elem of rev)
        res = elem + res;
    return parseInt(res) * Math.sign(n);

}
console.log("method2: " + intRev2(1234));
