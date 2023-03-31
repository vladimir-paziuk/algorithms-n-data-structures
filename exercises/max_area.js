// Max container of water
// Medium level
// O(n*m) width * height

const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
const input2 = [1, 1]; // 1
const input3 = [4, 3, 2, 1, 4]; // 16
const input4 = [0, 0, 100]; // 0

function maxArea(height) {
    let maxArea = 0;
    let leftIdx = 0;
    let rightIdx = height.length - 1;

    while (leftIdx < rightIdx) {
        const width = rightIdx - leftIdx;
        const minHeight = Math.min(height[leftIdx], height[rightIdx]);
        const volume = minHeight * width;

        maxArea = Math.max(maxArea, volume);

        if (height[leftIdx] < height[rightIdx]) {
            leftIdx += 1;
        } else {
            rightIdx -= 1;
        }
    }
    return maxArea;
}

console.log(input1, maxArea(input1));
console.log(input2, maxArea(input2));
console.log(input3, maxArea(input3));
console.log(input4, maxArea(input4));
