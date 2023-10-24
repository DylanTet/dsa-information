// Partial application is like currying, except instead of only providing one parameter per call,
// you bind the first part of a function to the second half.
const multiply = (a, b, c) => a*b*c;
const partialMultiplyBy5 = multiply.bind(null, 5);
partialMultiplyBy5(4, 100); // Will return 200 due to providing 5 as the a parameter to the orig function.