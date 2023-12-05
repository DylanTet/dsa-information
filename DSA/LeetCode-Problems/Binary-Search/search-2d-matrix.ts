/*
You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/

function searchMatrix(matrix: number[][], target: number): boolean {
    // Setting the l x w of the matrix to local variables
    const rows = matrix.length;
    const columns = matrix[0].length;

    // Setting local variables for the first and last arrays within the matrix
    let top = 0;
    let bottom = rows - 1;

    // Within here, we are cycling through the 1st layer elements of the array and checking if the last element
    // of the array or the first are larger or smaller than our target to figure out which array to move to
    // and if the target is between then it would be within that array.
    while (top <= bottom) {
        let row = Math.floor((top + bottom)/2);

        if (target > matrix[row][columns - 1]) {
            top = row + 1;
        } else if (target < matrix[row][0]) {
            bottom = row - 1;
        } else {
            break;
        }
    }

    // Here we've already moved past all the way up or down so that tells us that the element doesnt exist
    if (top > bottom) {
        return false;
    }

    // Here down we have now found the array that the target should be in, so we binary search it to see if its within
    // the current array.
    let row = Math.floor((top + bottom)/2)
    let l = 0
    let r = matrix[row].length;

    while (l <= r) {
        let mid = Math.floor((l + r)/2)

        if (target > matrix[row][mid]) {
            l = mid + 1
        } else if (target < matrix[row][mid]) {
            r = mid - 1;
        } else {
            return true
        }
    }

    return false;
};