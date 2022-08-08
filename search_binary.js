// O(logN2)

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; // SORTED

let iterationCount = 0;

function bSearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;

    while (start <= end) {
        iterationCount++;

        middle = Math.floor((start + end) / 2);

        if (array[middle] === item) {
            return middle;
        }
        if (array[middle] < item) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

function recursiveBSearch(array, item, start = 0, end = array.length) {
    iterationCount++;

    const middle = Math.floor((start + end) / 2);

    if (array[middle] === item || middle === -1) {
        return middle;
    }
    if (array[middle] < item) {
        return recursiveBSearch(array, item, middle + 1, end);
    } else {
        return recursiveBSearch(array, item, start, middle - 1);
    }
}

console.log(bSearch(data, 3));
// console.log(recursiveBSearch(data, 3));
console.log(iterationCount);