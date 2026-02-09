/*43. Extract a column from a 2D array
Hint: Loop through rows and pick the same column index.
Array Example:
[[1,2,3],[4,5,6],[7,8,9]] → column 1 → [2,5,8]
*/

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let col = 1;
for(let i =0; i<matrix.length;i++){
    console.log(matrix[i][col]);
}