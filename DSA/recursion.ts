const findFactorialRecursive = (number: number) : number => {
    if (number == 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
};

const findFactorialIterative = (number: number) => {

    let factorialNumber = 1;

    while (number != 1) {
        factorialNumber = factorialNumber * number;
        number--;
    }
};

const fibonacciIterative = (num: number) : number => {

    let fibSequence : number[] = [0,1];
    let currentNum = 2;

    if (num <= 1) {
        return fibSequence[num];
    }

    while (currentNum <= num) {
        fibSequence.push(fibSequence[currentNum - 1] + fibSequence[currentNum - 2]);
        currentNum++;
    }
    return fibSequence[-1];
}

const fibRecursive = (num: number) : number => {
    
    if (num <= 1) {
        return num;
    }

    return fibRecursive(num - 1) + fibRecursive(num - 2);
}

const reverseStringRecursive = (passedString: string) : string => {

    if (passedString.length === 1) return passedString;

    return passedString[passedString.length - 1] + reverseStringRecursive(passedString.slice(0, passedString.length - 1));
}

reverseStringRecursive("hello")

const array = [10, [12, 14, [1], [16, [20]]], 10, 11];

function nestedAdd(nestedArray: any) {
  let total = 0;
  
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      total += nestedAdd(nestedArray[i]);
    } else {
      total += nestedArray[i];
    }
  }
  return total;
}

console.log(nestedAdd(array));

