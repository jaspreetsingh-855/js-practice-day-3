/* 45. Sum of numbers in a jagged array
Hint: If element is array, go inside it; if number, add it.
Array Example:
[1,[2,[3,4]],5] → 15
*/
 let jaggedArray = [1,[2,[3,4]],5];
 let array  = jaggedArray.flat(Infinity);
let sum =0;
for(let i =0; i<array.length;i++){
      sum += array[i];
}

console.log(sum);

