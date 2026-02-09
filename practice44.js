/*44. Convert binary string to number
Hint: Treat string as array of characters and calculate value.
Array Example:
"1011" → ['1','0','1','1'] → 11;
*/
function binaryTODecimal(binaryStr){
 return (parseInt(binaryStr, 2));
}
console.log(binaryTODecimal("1011"));