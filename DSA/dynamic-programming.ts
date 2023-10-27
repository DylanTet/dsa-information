// Dynamic programming is when we are able to take a problem and break it down into
// smaller chunks in order to solve it. We can reduce the TIME COMPLEXITY of solving
// the problem by adding memoization to it to cache previously solved data.

const fibWithMemoization = () => {

    let cache = {};
    return function fib (num: number) {

        if (num in cache) return cache[num];

        else {
            if (num < 2) return num;
            cache[num] = fib(num - 1) + fib(num - 2)
            return cache[num];
        }
    }
}

const fibSolutionWithCache = fibWithMemoization();

console.log("The solution is", fibSolutionWithCache(10));