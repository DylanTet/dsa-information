/* 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of
the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.

Notice that you may not slant the container.

This problem I was confused as hell at the beginning with the directions so it took me a while to understand and grasp what
was fully going on within this problem. I got close initially, as I was calculating the max of the area comparing the current
pointer position vs the next pointer position and was updating the pointer if the area was more. This was wrong though because 
once it hit a spot where the next pointer area was less it would stay stuck at the pointer position for the remainder of the loop.

So this was the simple solution I got that continues to move the pointer according to which height is less than the other and
then just check which area is higher.
*/

function maxArea(height: number[]): number {
    
    let rainMax = 0;
    let p1 = 0;
    let p2 = height.length - 1;

    for (let i = 0; i < height.length; i++) {
        let currArea = (p2 - p1) * Math.min(height[p1], height[p2]);
        rainMax = Math.max(currArea, rainMax);

        if (height[p1] < height[p2]) {
            p1++;
        } else {
            p2--;
        }
    }

    return rainMax;
};