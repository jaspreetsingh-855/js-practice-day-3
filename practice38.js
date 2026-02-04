/*
38. Create a function that converts an array of ASCII codes into a string.
Example:
Input: [65,66,67]
Output: "ABC";
*/
function asciiCodesToString(asciiCodes){
    let result = '';
    for(let i = 0; i < asciiCodes.length; i++){
        result += String.fromCharCode(asciiCodes[i]);
    }
    return result;
}

let asciiCodes = [65, 66, 67];
console.log(asciiCodesToString(asciiCodes)); 