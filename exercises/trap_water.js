// Hard level

const input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 6 // uses in examples
const input2 = [4, 2, 0, 3, 2, 5]; // 9

/*
    First way: O(n)
        1 Set max value from the leftIdx     [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]
        2 Set max value from the rightIdx    [3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 0]
        3 Compare and set min             [0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0]
        4 Set diff between min and height [0, 0, 1, 0, 1, 2, 1, 0, 0, 1, 0, 0]

    Second way: O(1) Two pointers
        1 Set maxLeft and maxRight values as two boundary pointers, mL = 0 mR = 1
        2 If maxLeft greater than maxRight move maxRight to one item leftIdx, otherwise move maxLeft to rightIdx.
          If values equal always move maxLeft or maxRight, you can choose and don't change
        3 Math.min(mL, mR) - item with current pointer, set mL or mR value to current max item
            0.idx ) L 0 | mL = 0 First init, first value
            12.idx) R 1 | mR = 1 First init, last value
            1.idx ) L-> 0 - 1 = 0 | mL = 1
            2.idx ) L-> 1 - 0 = 1
            3.idx ) L-> 1 - 2 = 0 | mL = 2
            11.idx) R<- 1 - 2 = 0 | mR = 2
            4.idx ) L-> 2 - 1 = 1
            5.idx ) L-> 2 - 0 = 2
            6.idx ) L-> 2 - 1 = 1
            7.idx ) L-> 2 - 3 = 0 | mL = 3
            10.idx) R<- 2 - 1 = 1
            9.idx ) R<- 2 - 2 = 0

            height [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
            result [0, 0, 1, 0, 0, 1, 2, 1, 0, 1, 0, 1] = sum = 6
*/

function trap(height) {
    let maxLeft = height[0];
    let maxRight = height[height.length - 1];

    // Pointers
    let leftIdx = 1; // Start from second item of array since set maxLeft and first one
    let rightIdx = height.length - 2; // The same for previous before last

    let total = 0;

    // ----><--
    while (leftIdx <= rightIdx) {
        if (maxLeft <= maxRight) {
            maxLeft = Math.max(maxLeft, height[leftIdx]);
            total += maxLeft - height[leftIdx];
            leftIdx += 1;
        } else {
            maxRight = Math.max(maxRight, height[rightIdx]);
            total += maxRight - height[rightIdx];
            rightIdx -= 1;
        }
    }

    return total;
}

console.log(trap(input1));
console.log(trap(input2));
