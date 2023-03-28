function factorialRecursive(n) {
    if (n === 1) {
        return n;
    }
    return n * factorialRecursive(n - 1);
}

function factorialLoop(n) {
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}

console.log(factorialRecursive(5));
console.log(factorialLoop(5));
