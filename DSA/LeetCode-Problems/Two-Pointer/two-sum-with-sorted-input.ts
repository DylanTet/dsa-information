/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that 
they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] 
where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.

There are multiple points with this problem that needed to be pointed out. The first obvious one is that the input
array is already sorted so that needs to be taken advantage of. The second, is that you MUST use constant space
so the use of maps is taken out from the original problem with the unsorted array. So with that, the next best solution
is a two-pointer approach.
*/

function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    for (let i = 0; i < numbers.length; i++) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) return [left + 1, right + 1];

        else if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        }
    }

    return [left + 1, right + 1];
};