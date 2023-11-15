/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

Everything about this problem was pretty self explanatary except for the last request which was implementing the getMin()
method in O(1) time. So within the custom data structure I created another stack that kept track of the min history.
*/

class MinStack {

    stack: Array<number> = [];
    minValueList: Array<number> = [];

    constructor() {};

    push(val: number): void {
        this.stack.push(val);

        if (this.minValueList.length === 0) {
            this.minValueList.push(val)
        } else if (val <= this.minValueList[this.minValueList.length - 1]) {
            this.minValueList.push(val)
        }
    }

    pop(): void {
        const num = this.stack.pop();

        if (num === this.minValueList[this.minValueList.length - 1]) {
            this.minValueList.pop();

        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minValueList[this.minValueList.length - 1];
    }
}