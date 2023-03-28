function compose(...funcs) {
    if (funcs.length === 0) {
        return function (arg) {
            return arg;
        };
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce(function (a, b) {
        return function () {
            return a(b.apply(null, arguments));
        };
    });
}

// Just changed to reduceRight
function curry(...funcs) {
    return funcs.reduceRight(function (a, b) {
        return function () {
            return a(b.apply(null, arguments));
        };
    });
}

const func1 = val => val + "First => ";
const func2 = val => val + "Second => ";
const func3 = val => val + "Third => ";
const func4 = val => val + "Fourth => ";

const compose1 = func1(func2(func3(func4("start from:"))));
const compose2 = compose(func1, func2, func3, func4)("start from:");

const curry1 = func4(func3(func2(func1("start from:"))));
const curry2 = curry(func1, func2, func3, func4)("start from:");

console.log(compose1, compose1 === compose2);
console.log(curry1, curry1 === curry2)
