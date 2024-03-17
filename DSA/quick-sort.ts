/*
[4,9,3,5] list
-> 5 is made the pivot since it's the last in the array
-> divide list into two lists, [4,3] and [9]
  - Everything that is smaller than the "pivot" is put to the left of the array
    and everything that is bigger is on the right.
-> call quicksort on those two lists

[4, 3]
-> 3 is pivot
-> call quicksort on [] and [4]
-> those both return as is as they are the base case of length 0 or 1
-> concat [], 3, and [4]
-> return [3,4]

[9]
-> returns as this it is a base case of length 1

(back into the original function call)
-> call concat on [3,4], 5, and [9]
-> return [3,4,5,9]
*/

/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

const list = [91, 49, 19, 48, 12, 20, 5, 2, 40, 18, 48, 59, 39];

function quickSort(nums: number[]): number[] {
 
  // Base case to return from if we have one element or if the list is empty
  if (nums.length <= 1) {
    return nums;
  }
  
  // Setup our smaller and larger than list along with the pivot number
  const l: number[] = [];
  const r: number[] = [];
  const pivot = nums[nums.length - 1];
  
  // Loop through the list to sort which list the element goes into
  for (let i = 0; i < nums.length - 1; i++) {
    nums[i] <= pivot ? l.push(nums[i]) : r.push(nums[i]);
  }
  
  // Return the lists returned from quickSort with the pivot in the middle
  // Same as quickSort(l).concat(pivot, quickSort(r));
  return [...quickSort(l), pivot, ...quickSort(r)];
};

const orderedList = quickSort(list)
console.log(orderedList);
