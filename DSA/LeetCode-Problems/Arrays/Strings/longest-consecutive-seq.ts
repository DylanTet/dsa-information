/* 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

There were multiple ways to implement this solution with the other way being a set as from what I read, a set utilizes
a hashmap under the hood to efficiently confirm unique elements. However, I noticed the average time being around 1500ms
for a set compared to sub 300ms for a standard map being used.
*/

function longestConsecutive(nums: number[]): number {
    const map = new Map<number, number>();
    let longestList = 0;

    for (let num of nums) {
        if (!map.get(num)) {
            map.set(num, num);
        }
    }

    for (let [key, value] of map) {
        if (map.get(key - 1) === undefined) {
            let currNum = key, currList = 0;
            
            while (map.get(currNum) !== undefined) {
                currList++;
                currNum++
                longestList = Math.max(currList, longestList);
            }
        }
    }

    return longestList;
};
