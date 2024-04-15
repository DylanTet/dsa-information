function dailyTemperatures(temperatures: number[]): number[] {
    // A stack to store objects with the temp of the day and its index to later
    // calc how many days have passed.
    const stack = [];
    const result = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) { //O(n + n)
        let currTemp = temperatures[i];

        // Now we loop through the current stack and check if the current temp is greater than
        // the previous day, if it is, well continue to pop off the temps utilizing the index
        // stored in the object to calc days passed
        while (stack.length > 0 && currTemp > stack[stack.length - 1].temp) { // O(n + n) 
            let { ind } = stack.pop();
            result[ind] = i - ind;
        }
        
        stack.push({ temp: currTemp, ind: i });
    }

    return result;
}
