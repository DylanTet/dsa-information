// Currying -> The process of taking a function with multiple arguments and turning it into a sequence of
// functions that each take in one argument.

const multiply = (a, b) => a * b;

const curriedFunction = (a) => (b) => a * b;

const curriedMultBy5 = curriedFunction(5);
curriedMultBy5(2) // Will return 10 because the first half or the a variable, will always be 5.