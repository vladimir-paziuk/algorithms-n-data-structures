// https://leetcode.com/problems/number-of-islands/
// Example 1:
//
// Input: grid = [
//     ['1','1','1','1','0'],
//     ['1','1','0','1','0'],
//     ['1','1','0','0','0'],
//     ['0','0','0','0','0']
// ]
// Output: 1
// Example 2:
//
// Input: grid = [
//     ['1','1','0','0','0'],
//     ['1','1','0','0','0'],
//     ['0','0','1','0','0'],
//     ['0','0','0','1','1']
// ]
// Output: 3

let grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
];

let grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];

var markNeighbors = function(grid, r, c) {
    grid[r][c] = '2'; // Marked

    if (grid[r][c + 1] === '1') { markNeighbors(grid, r, c + 1) }
    if (grid[r][c - 1] === '1') { markNeighbors(grid, r, c - 1) }
    if (grid?.[r + 1]?.[c] === '1') { markNeighbors(grid, r + 1, c) }
    if (grid[r - 1]?.[c] === '1') { markNeighbors(grid, r - 1, c) }
};

var numIslands = function(grid) {
    const rowsL = grid.length;
    const colsL = grid[0].length;

    let counter = 0;

    if (rowsL === 0) {
        return 0;
    }

    for (let r = 0; r < rowsL; r++) {
        for (let c = 0; c < colsL; c++) {
            if (grid[r][c] === '1') {
                counter++;
                markNeighbors(grid, r, c);
            }
        }
    }

    return counter;
};

console.log(numIslands(grid1));
console.log(numIslands(grid2));