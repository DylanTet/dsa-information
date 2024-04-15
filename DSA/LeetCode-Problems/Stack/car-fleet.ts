function carFleet(target: number, position: number[], speed: number[]): number {

    // Here we combine the vehicle position and speed into one ordered array by position
    const combinedSpeedPosition = combineData(position, speed);

    const stack: number[] = [];

    // Now we loop through the comined array starting from the closest position to target
    for (let i = combinedSpeedPosition.length - 1; i > -1; i--) {
        const p = combinedSpeedPosition[i][0];
        const s = combinedSpeedPosition[i][1];

        // Here we push onto the array how long it will take the current vehicle to reach the target
        stack.push((target - p) / s);

        // Then finally we check if the current vehicle will take less time than the previous vehicle,
        // because if it does, its going to be blocked by the previous vehicle and become a fleet so
        // pop that one off and go by the previous vehicles time
        if (
            stack.length >= 2 &&
            stack[stack.length - 1] <= stack[stack.length - 2]
        ) {
            stack.pop();
        }
    }
    return stack.length;
};

function combineData(position: number[], speed: number[]) {
    const combinedData = [];
    
    for (let i = 0; i < position.length; i++) {
        combinedData.push([position[i], speed[i]]);
    }
    return combinedData.sort((a, b) => a[0] - b[0]);
}
