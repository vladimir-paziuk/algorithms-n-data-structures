// O(0.5 * n*n) = O(n*n)

const data = [0,3,1,9,4,2,1,5,6,8,35,6,3,32,9,6,4,1,7,-1,-5,23,6];
let iterationCount = 0;

function sortSelection(array) {
    for (let i = 0; i < array.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            iterationCount++;

            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIdx];
        array[minIdx] = temp;
    }
    return array;
}

console.log(sortSelection(data));
console.log(iterationCount);
