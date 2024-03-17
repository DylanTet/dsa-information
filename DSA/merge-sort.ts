const numberList = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = (list: number[]) : number[] => {

    if (list.length === 1) return list;

    // SPLIT THE ARRAY IN HALF TO RIGHT AND LEFT
    const left = list.splice(0, list.length/2);
    
    return merge(mergeSort(left), mergeSort(list));
}

const merge = (leftList: number[], rightList: number[]) => {

    // Do the work comparing the elements in the returned lists from splitting them up.
    const newList : number[] = [];
    let leftNum = 0;
    let rightNum = 0;

    // RUN THROUGH THE LISTS UNTIL WE REACH THE END OF EITHER LEFT OR RIGHT.
    while (rightNum < rightList.length && leftNum < leftList.length) {

        if (leftList[leftNum] >= rightList[rightNum]) {
            newList.push(rightList[rightNum]);
            rightNum++;
        } else if (rightList[rightNum] > leftList[leftNum]) {
            newList.push(leftList[leftNum]);
            leftNum++;
        }
    }

    console.log(leftList, rightList, newList);

    // RETURN THE NEWLIST AND ADD WHATEVER IS LEFTOVER IN EITHER LIST TO THE END. BECAUSE THE
    // END OF THE LIST IS ALREADY ORDERED CORRECTLY.
    return newList.concat(leftList.slice(leftNum)).concat(rightList.slice(rightNum));
}

const answer = mergeSort(numberList);
// console.log(answer);

// Frontend Masters Merge Sort Solution
function frontendMastersMergeSort(list: number[]) {
  
  // BASE CASE, return if your length is 1 (or 0)
  if (list.length < 2) {
    return list;
  }

  //Break down into two smaller arrays.
  const length = list.length;
  const middle = Math.floor(length / 2);
  const left = list.slice(0, middle);
  const right = list.slice(middle);
  
  // Call mergeSort on both the left and right list that was sliced from the original array
  const sortedLeft = frontendMastersMergeSort(left);
  const sortedRight = frontendMastersMergeSort(right);
  
  // Return the merge of both the left and right array.
  return frontendMastersMerge(sortedLeft, sortedRight);
}

function frontendMastersMerge(leftList: number[], rightList: number[]) {
  const returnArray = [];

  while (leftList.length && rightList.length) {
    if (leftList[0] <= rightList[0]) {
      returnArray.push(leftList.shift());
    } else {
      returnArray.push(rightList.shift());
    }
  }

  return returnArray.concat(leftList, rightList);
}
