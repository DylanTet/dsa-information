const numList: number[] = [8, 92, 73, 19, 8, 3, 289, 26, 18, 7];

const bubbleSort = (list: number[]) : number[] => {

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j] > list[j+1]) {
                let temp = list[j];
                list[j] = list[j+1]
                list[j+1] = temp;
            }
        }
    }

    console.log(list);
    return list;
}

// Best case Big O for bubble sort is actuall O(n), and that is if it was able to loop through the list
// if it is already sorted and runs through it once.
// 
// Average case is O(n2) because each element will most likely see eachother throughout the process of 
// getting sorted.
//
// Worst case is if the array is in reverse order and the entire array needs to be swapped.

function bubbleSort2(list: number[]) {
  let swapped = false;

  // Slight performance upgrade subtracting the number of iterations from the loop because we know that after
  // the first iteration, the biggest number is at the end so there is no need to go to the end.
  let iterations = 0;
  do {
    swapped = false;
    for (let i = 0; i < list.length - iterations; ++i) {
      if (list[i] > list[i+1]) {
        const temp = list[i];
        list[i] = list[i+1];
        list[i+1] = temp;
        swapped = true;
      }
    }
    iterations++;

  } while (swapped)
  return list;
}

const sorted = bubbleSort2(numList);
console.log(sorted);
