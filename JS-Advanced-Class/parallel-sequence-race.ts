const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

// The parallel style is used when you want all of the promises to be run at once 
// together, return one by one and then when all the functions are finished
// you will have access to the output.
// NOTE: ALL PROMISES MUST RETURN WITHOUT REJECTION TO WORK CORRECTLY OR ELSE IT FAILS
async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}

// SO INSTEAD FROM ES2020, WE CAN USE .allSettled which will return the outputs with either
// the rejection or the resolve.
async function parallelWithAllSettled() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.allSettled(promises);
    return `prallel is done: ${output1} ${output2} ${output3}`
  }

// Promise.race is used when you want the functions to all be run and the function
// that returns first will be returned from the .race method call with the others being
// discarded.
async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

// The sequence style is used when you want each individual method to be ran individually
// waiting on the function before it to return.
async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)