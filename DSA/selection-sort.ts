const selectionList: number[] = [8, 92, 73, 19, 8, 3, 289, 26, 18, 7];

const selectionSort = (numList: number[]) : number[] => {

    for (let i = 0; i < numList.length; ++i) {
        let temp = numList[i];
        let min = i
        for (let j = i + 1; j < numList.length; ++j) {

            if (numList[j] < numList[min]) {
                min = j;
            }
        }
        
        numList[i] = numList[min];
        numList[min] = temp;
    }

    console.log(numList);
    return numList;
}

selectionSort(selectionList);