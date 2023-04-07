const input1 = 12321; // Output: true
const input2 = -121; // Output: false
const input3 = 10; // Output: false

const isPalindromeNumber = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;

    let rev = 0;

    while (x > rev) {
        rev *= 10;
        rev += x % 10;
        x = Math.trunc(x / 10);
    }
    return x === rev || x === Math.trunc(rev / 10);
};

console.log(isPalindromeNumber(input1));
console.log(isPalindromeNumber(input2));
console.log(isPalindromeNumber(input3));
