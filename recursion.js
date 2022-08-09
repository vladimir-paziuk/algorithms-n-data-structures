function factorial(n) {
    if (n === 1) {
        return n;
    }
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(factorial(5));
console.log(fibonacci(8)); // 1, 1, 2, 3, 5, 8, 13, 21, 34
