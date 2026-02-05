/*
32. Create a function that will capitalize the first letter of each word in a text.
Example:
Input: "i love javascript"
Output: "I Love Javascript"
*/
function capitalizeWords(text){
    let words = text.split(' ');
    for(let i =0; i<words.length;i++){
        words[i]= words[i].charAt(0).toUpperCase() + words[i].slice(1);

    }
    return words.join(' ');
}


let text = 'i love javascript';
console.log(capitalizeWords(text));