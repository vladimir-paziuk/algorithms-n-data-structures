/*
    Function composition is a technique in which you combine two or more functions to produce a new function.
    The idea is to take the output of one function and use it as the input for another.

    Functions that accept other functions as arguments or return functions are called Higher Order Functions.
    They are the backbone of function composition.

    Closure in JavaScript allows a function to access variables from an enclosing scope,
    even after the outer function has finished executing.
    This concept is particularly useful in function composition to maintain the state between different function calls.

    https://blog.stackademic.com/understand-javascript-composition-once-and-for-all-96e69ebee4bd
    https://medium.com/free-code-camp/10-ways-to-write-pipe-compose-in-javascript-f6d54c575616

       pipe(func1, func2, func3)("start from:") -> start from:First => Second => Third =>
    compose(func1, func2, func3)("start from:") -> start from:Third => Second => First =>
 */

const compose = (...functions) => {
    return (input) => {
        return functions.reduceRight((acc, fn) => {
            return fn(acc);
        }, input);
    };
};

const pipe = (...functions) => {
    return (input) => {
        return functions.reduce((acc, fn) => {
            return fn(acc);
        }, input);
    };
};

// const compose = (...fns) => input => fns.reduceRight((acc, fn) => fn(acc), input);
// const pipe = (...fns) => input => fns.reducer((acc, fn) => fn(acc), input);

const func1 = val => val + "First => ";
const func2 = val => val + "Second => ";
const func3 = val => val + "Third => ";
const func4 = val => val + "Fourth => ";

const compose1 = func1(func2(func3(func4("start from:"))));
const compose2 = compose(func1, func2, func3, func4)("start from:");

const pipe1 = func4(func3(func2(func1("start from:"))));
const pipe2 = pipe(func1, func2, func3, func4)("start from:");

console.log(compose2, compose1 === compose2);
console.log(pipe2, pipe1 === pipe2);
