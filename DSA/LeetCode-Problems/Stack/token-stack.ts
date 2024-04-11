// Time complexity O(n) and Space Complexity is O(n) due to maintaining a stack.
function evalRPN(tokens: string[]): number {
    const stack = [];
    tokens.forEach((token) => {
        if (token === "+") {
            stack.push(Number(stack.pop() + Number(stack.pop())))
        } else if (token === "/") {
            const a = Number(stack.pop());
            const b = Number(stack.pop());
            stack.push(Math.trunc(b / a));
        } else if (token === "*") {
            stack.push(Number(stack.pop() * Number(stack.pop())));
        } else if (token === "-") {
            const a = Number(stack.pop());
            const b = Number(stack.pop());
            stack.push(b - a);
        } else {
            stack.push(Number(token))
        }
    })

    return stack[0];
};

// Time Complexity is going to be O(n^2) and O(1) for space Complexity on this because we are modifying the provided array
// with the previous calculation put where the previous operator was.
function evalRPN2(tokens: string[]): number {
    while (1 < tokens.length) { // O(n)
        const isOperation = () => tokens[index] in OPERATORS;
        while (!isOperation()) index++; // O(n)

        const value = performOperation(tokens, index);
        tokens[index] = value;
        tokens.splice((index - 2), 2); //O(n) because it needs to shift all of the elements to the left.
        index--;
    }
    return Number(tokens[0]);
}

function performOperation(tokens, index) {
    const [ rightNum, leftNum ] = [ Number(tokens[index - 1]), Number(tokens[index - 2]) ];
    const operation = OPERATORS[tokens[index]];
    return operation(leftNum, rightNum);
}

var OPERATORS = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
};
