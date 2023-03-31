// https://leetcode.com/problems/search-in-rotated-sorted-array/

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

let nums = [4,5,6,7,0,1,2];

let search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // When dividing the rotated array into two halves, one must be sorted.

        // Check if the left side is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                // target is in the left
                right = mid - 1;

            } else {
                // target is in the right
                left = mid + 1;
            }
        }

        // Otherwise, the right side is sorted
        else {
            if (nums[mid] <= target && target <= nums[right]) {
                // target is in the right
                left = mid + 1;

            } else {
                // target is in the left
                right = mid - 1;
            }
        }


    }

    return -1;
};

console.log(search(nums, 0));
console.log(search(nums, 3));