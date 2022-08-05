// O(logN2)

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; // SORTED

let iterationCount = 0;

function bSearch(array, item) {
    let startIdx = 0;
    let endIdx = array.length;
    let middleIdx;

    let isFound = false;
    let position = -1;

    while (isFound === false && startIdx <= endIdx) {
        iterationCount++;

        middleIdx = Math.floor((startIdx + endIdx) / 2);
        const current = array[middleIdx];

        if (current === item) {
            isFound = true;
            position = middleIdx;
            break;
        }
        if (current < item) {
            startIdx = middleIdx + 1;
        } else {
            endIdx = middleIdx - 1;
        }
    }
    return position;
}

console.log(bSearch(data, 4));
console.log(iterationCount);