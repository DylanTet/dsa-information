// Compose and Pipe from 3rd party libraries give us the ability to chain functions together
// and run one after another with the returned data. The only difference between the two
// is the order that the passed function parameters are run in.

compose(fn1, fn2, fn3)(50) //Right to left
pipe(fn3, fn2, fn1)(50)//left to right

const compose = (f, g) => (a) => f(g(a))
const pipe = (f, g) => (a) => g(f(a))
const multiplyBy3AndAbsolute = compose((num) => num*3, Math.abs)
console.log(multiplyBy3AndAbsolute(-50))