// A form of caching where we cache the return value of a function based on the parameters.
// So if the parameters dont change, the function will return the cached memory instead
// of calculating the data again.

function memoizedFunction() {
    let cache = {};
    return function(n) {    // Taking advantage of closures here to maintain memory of the cache
        if (n in cache) {   // not in the global namespace.
            return cache[n];
        }
        cache[n] = n + 80;
    }
}

const memoizedWithCache = memoizedFunction();

memoizedWithCache(8);
memoizedWithCache(3);
memoizedWithCache(8);