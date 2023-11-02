/* 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all 
the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit 
in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.

I struggled a bit on this one to figure it out as I wasnt aware of the prefix and postfix solution to solve the
problem. However, after reading up on the solution it makes sense as to why this is an optimal solution.
*/

function productExceptSelf(nums: number[]): number[] {
    
    let answer: number[] = [];
    let product: number = 1;

    for (let i = 0; i < nums.length; i++) {
        answer[i] = product;
        product *= nums[i];
    }

    product = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= product;
        product *= nums[i]
    }
    console.log(answer);
    return answer;
};