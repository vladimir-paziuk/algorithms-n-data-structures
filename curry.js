/*
    Currying is a technique used in functional programming that allows you to transform a function
    with multiple arguments into a sequence of functions, each taking only one argument at a time.

    https://designtechworld.medium.com/everything-about-currying-in-javascript-a2614b82e6ca
    https://javascript.info/currying-partials
 */

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}


function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));