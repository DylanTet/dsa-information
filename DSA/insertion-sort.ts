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

insertionSort();