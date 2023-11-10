/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

function threeSum(nums: number[]): number[][] {

    // Sort the array in ascending order to make it easier to traverse the array and know if we need to increase or decrease
    // the value of the pointers.
    nums.sort((a, b) => a - b);
    const res: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
        // After we get passed the first element, we need to check to make sure we dont have a duplicate element for the first
        // pointer.
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[left] + nums[right] + nums[i];
            
            if (sum === 0) {
                res.push([nums[left], nums[right], nums[i]]);
                left += 1;
                // This also ensures that our second pointer is not the same as the ones we just pushed into our res array.
                // For e.g. [0,0,0,0], in that instance our second pointer would move up in the while loop and would push another
                // array of [0,0,0] into our result which isnt allowed.
                while (nums[left] == nums[left - 1] && left < right) {
                    left += 1;
                }

            // Because we sorted our array, we know if we need to decrease or increase our pointers to get the correct value.
            } else if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            }
        }
    }
    return res;
};