/*46. Find max number in a jagged array
Hint: Traverse all nested arrays and compare values.
Array Example:
[1,[10,[25,3]],7] → 25
*/
let jaggedArray = [1,[10,[25,3]],7];
let array = jaggedArray.flat(Infinity);
let max = array[0];
for(let i =0; i<array.length;i++){
    if(array[i]>max){
        max = array[i];

    }

}
console.log(max);
