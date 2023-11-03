/* 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Great solution that I found for this problem where you create template literals for each row, col, and 3x3 box with the
value, check if any of those are in the set or add to the existing set. Great way to also only have to create one set for
the entire program.
*/

function isValidSudoku(board: string[][]): boolean {
    const set = new Set<string>();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[i][j];
            if (cell === '.') continue;

            const row = `row: ${i} value: ${cell}`;
            const col = `col: ${j} value: ${cell}`;
            const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            const box = `boxNumber: ${boxNumber}, value ${cell}`;

            if (set.has(row) || set.has(col) || set.has(box)) return false;
            set.add(row).add(col).add(box);
        }
    }
    return true;
};