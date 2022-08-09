// O(n*n)

const data = [0,3,1,9,4,2,1,5,6,8,35,6,3,32,9,6,4,1,7,-1,-5,23,6];
let iterationCount = 0;

function sortQuick(array) {
    if (array.length <= 1) {
        return array
    }
    const pivotIdx = Math.floor(array.length / 2);
    const pivot = array[pivotIdx];

    const less = [];
    const greater = [];

    for (let i = 0; i < array.length; i++) {
        iterationCount++;

        if (i === pivotIdx) {
            continue;
        }
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...sortQuick(less), pivot, ...sortQuick(greater)];
}

console.log(sortQuick(data));
console.log(iterationCount);
