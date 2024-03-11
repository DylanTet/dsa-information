// USE THIS ALGORITHM MOSTLY WHEN YOU ARE DEALING WITH DATA THAT IS MOSTLY SORTED ALREADY.

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = () => {

    for (let i = 0; i < numbers.length; ++i) {

        // INSERT THE ELEMENT AT THE BEGINNING OF THE ARRAY IMMEDIATELY IF ITS SMALLER THAN THE FIRST.
        if (numbers[0] > numbers[i]) {
            numbers.unshift(numbers.splice(i, 1)[0])
        
        } else {

            // NOW LOOP THROUGH STARTING AT ELEMENT 1 TO FIND WHEN J IS BIGGER THAN WHERE I CURRENTLY IS AND SPLICE AND INSERT ELEMENT I BEFORE J.
            // AKA FIND WHERE THE NUMBER NEEDS TO GO.
            for (let j = 1; j < i; ++j) {

                if (numbers[i] > numbers[0] && numbers[i] < numbers[j]) {
                    numbers.splice(j, 0, numbers.splice(i, 1)[0]);
                    console.log(numbers)
                }
            }
        }
    }
}

function insertionSort2(list: number[]) {
  // This outer loop runs over the numbers that need to be inserted into the "sorted" area of the array
  for (let i = 1; i < list.length; i++) {
    let numberToInsert = list[i];
    let j: number;

    // Slight improvement checking if the numToInsert is less than the 1st element, if so theres no reason
    // to cycle through the sorted list.
    if (numberToInsert < list[0]) {
      j = -1;
    }

    // This inner loop then loops throught the "Sorted" section of the list to find whether or not any of the indexes are smaller than numberToInsert
    // and will keep bumping the the larger numbers to the right if they're larger than numberToInsert. If it gets to the beginning of the array, it'll
    // then just insert at the beginning because j = i - 1 will run, thus setting j = -1 and then we insert the num at 0.
    for (j = i - 1; list[j] > numberToInsert && j >= 0; j--) {
      list[j + 1] = list[j];
    }

    // Now we can insert in the position where we left off from the loop before this
    list[j + 1] = numberToInsert;
  }

  console.log(list);
  return list;
}

const sorted = insertionSort2(numbers);
