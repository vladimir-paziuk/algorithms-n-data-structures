// O(n*n)

const data = [0,3,1,9,4,2,1,5,6,8,35,6,3,32,9,6,4,1,7,-1,-5,23,6];
let iterationCount = 0;

function sortBubble(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            iterationCount++;

            if (array[j + 1] < array[j]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(sortBubble(data));
console.log(iterationCount);
