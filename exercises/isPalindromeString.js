function isPalindromeString(str) {
    str = str.toLowerCase().replace(/\s/g,'');
    return str === str.split('').reverse().join('');
}


function isPalindromeString2(str) {
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    return true;
}

console.log(isPalindromeString('racecar'), isPalindromeString2('racecar')); // true
console.log(isPalindromeString('table'), isPalindromeString2('table')); // false