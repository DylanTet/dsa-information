
// Runtime is O(n) with a space complexity of O(1) which was a requirement of this challenge because the input array is already sorted!
// So because its already sorted, there is no need to maintain a map to keep track of all the previous calculations because we know that
// if the target is greater than or less than our current calc, we can move our larger pointer left or smaller pointer right to find the 
// correct calculation.
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let current = numbers[left] + numbers[right];
        if (current > target) {
            right--;
        } else if (current < target) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
};
