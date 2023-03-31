// Easy level
// O(n)

const input1 = '(){}[]';
const input2 = '({[]})()';
const input3 = '({)}';

function isValid(inputStr) {
    const brackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    // FILO
    const stack = [];

    for (let i = 0; i < inputStr.length; i++) {
        const current = inputStr[i];

        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) {
                return false;
            }
        } else {
            stack.push(current);
        }
    }
    return stack.length === 0;
}

function isClosedBracket(ch) {
    return [")", "]", "}"].indexOf(ch) > -1;
}

console.log(isValid(input1));
console.log(isValid(input2));
console.log(isValid(input3));
