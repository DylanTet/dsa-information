/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once. 
*/

/* 
This problem was tricky because I orginally had difficulty trying to figure out how I can hash each
character in order to avoid situations where the ASCII value of some strings were the same.
The solution here is basically highlighting each character within the alphabet and then making
that string the key. So when you have words with the same characters, the string would be the same.
*/

// Time complexity O(n * k)
function groupAnagrams(strs: string[]): string[][] {
    if (strs.length < 2) return [strs];
  
    const existingValues = new Map<string, string[]>();
    const valueArray = [];
  
    for (let i = 0; i < strs.length; ++i) { // Time O(n)
      const currString = strs[i];
      let keyHash = Array.from({ length: 26 }, () => 0); // Time O(n), creating a new array of size 26 and filling it with 0.
  
      for (let j = 0; j < currString.length; ++j) { // Time O(k) size of the current string
        keyHash[currString.charCodeAt(j) - 97]++;
      }
  
      let keyString = keyHash.toString();
  
      if (existingValues.has(keyString)) {
        existingValues.get(keyString).push(currString);
      } else {
        existingValues.set(keyString, [currString]);
      }
    }
  
    for (let [key, value] of existingValues) { // Time O(n)
      // console.log(value);
      valueArray.push(value);
    }
  
    return valueArray;
};

// Time complexity O(n * k)
var groupAnagrams1 = function(strs, map = new Map()) {
    for (let i = 0; i < strs.length; i++) {
        const hash = strs[i].split('').sort((a, b) => a.localeCompare(b)).join('');
        if (hash in map) {
            map[hash].push(strs[i]);
        } else {
            map[hash] = [strs[i]];
        }
    }
    const newList = [];
    for (key in map) {
        newList.push(map[key]);
    }

    return newList;
}
