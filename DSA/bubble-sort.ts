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

bubbleSort(numList);