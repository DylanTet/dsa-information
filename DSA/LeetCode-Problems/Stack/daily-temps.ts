/*
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is 
the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which 
this is possible, keep answer[i] == 0 instead.
*/

function dailyTemperatures(temperatures: number[]) : number[] {

    // Create our answer array which we will fill in as we loop through the array of temps and our stack to keep track of the 
    // temperatures.
    let result = new Array(temperatures.length).fill(0);
    let stack = [];

    for (let i=0; i < temperatures.length; i++) {

        let currentTemp = temperatures[i];

        // Now here we loop through as long as there are temps in the stack AND if the current Temp were on is larger than the temp
        // at the end of the stack. Doing it this way, we can continue to pop off the smaller temps from the lefthand side of the
        // array as we move right and update how many days at the smaller temp by subtracting the idx were at from were the smaller
        // temp is!
        while (stack.length > 0 && currentTemp > stack[stack.length - 1].temp) {
            let {idx} = stack.pop();
            result[idx] = i - idx;
        }

        // By pushing objects with the idx and temp, we can keep track later on if the currentTemp is > this temp and subtract
        // the current idx from this to update our result array with the correct number of days past.
        stack.push({ idx: i, temp: currentTemp });
    }

    return result;
}