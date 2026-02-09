/*
37. Create a function that converts a string into an array of ASCII codes of each character.
Example:
Input: "ABC"
Output: [65,66,67]
*/
function stringToAsciiCodes(text) {
    let asciiCodes = [];
    for (let i = 0; i < text.length; i++) {
        asciiCodes.push(text.charCodeAt(i));
    }

    // charcodeat() javascript ch build in function h jo string di ascii value return karda                                                 
    return asciiCodes;
}

let text = 'ABC';
console.log(stringToAsciiCodes(text));