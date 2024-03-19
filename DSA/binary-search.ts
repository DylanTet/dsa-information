
const list = [ 
  { id: 1, name: "Sam" },
  { id: 3, name: "Sarah" },
  { id: 5, name: "John" },
  { id: 6, name: "Burke" },
  { id: 10, name: "Simona" },
  { id: 12, name: "Asim" },
  { id: 13, name: "Niki" },
  { id: 15, name: "Aysegul" },
  { id: 17, name: "Kyle" },
  { id: 18, name: "Jem" },
  { id: 19, name: "Marc" },
  { id: 21, name: "Chris" },
  { id: 24, name: "Ben" }];

type Person = {
  id: number,
  name: string
};

function binarySearch(id: number, array: Person[]) {
  // Theres multiple ways to organize the pointers, but I created two pointers one to the back and one to the front.
  let min = 0;
  let max = array.length;
  
  // Loop through data list while min pointer doesnt equal max pointer
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    
    if (id > array[mid].id) {
      min = mid + 1;
    } else if (id < array[mid].id) {
      max = mid - 1;
    } else {
      return array[mid];
    }
  }
  return undefined;
}

const found = binarySearch(21, list);
console.log(found);
