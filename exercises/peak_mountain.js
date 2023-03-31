let arr1 = [1,2,3,4,3,2,1];
let arr3 = [10,9,8,7,6];
let arr2 = [1,2,3,4,5,6,5,4,3,2];

let peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const middle = Math.floor((start + end) / 2);

        if (arr[middle] < arr[middle + 1]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return start;
};

console.log(peakIndexInMountainArray(arr1));
console.log(peakIndexInMountainArray(arr3));
console.log(peakIndexInMountainArray(arr2));