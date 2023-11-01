/* 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

This was relatively simple to implement, the only challenging part was being able to try and sort a JS map, 
which is what was implemented below using the JS sort() method. To improve this, I could have implemented a better
algorithm like merge or insertion sort.

new Map([...intMap.entries()] => This creates a multi-dimensional array out of the key-value pairs stored in the map.
[...map1.entries()].sort((a,b) => b[1] - a[1])); => Custom logic where it is comparing the values ([1] is the value) 
to be in descending order instead of a[1] - b[1] which would be ascending 
*/

function topKFrequent(nums: number[], k: number): number[] {

    if (nums.length < 2) return nums;

    const intMap = new Map<number, number>();

    for (let i = 0; i < nums.length; ++i) {

        if (intMap.has(nums[i])) {
            intMap.set(nums[i], intMap.get(nums[i]) + 1);
            continue;
        }

        intMap.set(nums[i], 1);
    }

    const sortedMap = new Map([...intMap.entries()].sort((a,b) => b[1] - a[1]));

    const mapIterator = sortedMap.keys();
    const returnArray = [];

    for (let i = 0; i < k; i++) {
        returnArray.push(mapIterator.next().value);
    }

    return returnArray;
};