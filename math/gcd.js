/*
    Algorithms for calculating the Greatest Common
    Divisor (GCD) of positive integers.
    Sources:
        http://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor
*/

function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a); // This can be optimized further with bitwise operations
    }
}

function gcd_iter(a,b) {
    let temp = 0;
    
    while(b) {
        temp = b; 
        b = a % b; 
        a = temp;
    }

    return a
}

console.log(gcd_iter(357,234))