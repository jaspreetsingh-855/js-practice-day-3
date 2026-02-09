/* 47. Deep copy a jagged array
Hint: Create new array and copy nested arrays separately.
Array Example:
[1,[2,[3]]] → new independent copy
*/
let jaggedArray = [1,[2,[3]]];
 array  = jaggedArray.flat(Infinity);
  console.log(array);
