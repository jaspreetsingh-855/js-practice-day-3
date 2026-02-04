/* 31. Create a function that will return the number of words in a text.
Example:
Input: "I love JavaScript"
Output: 3;
*/

function countWords(text){
    let count = 1;
      for(let i=0; i<text.length;i++){
        if(text[i]===' '){
            count++;
        }
      }
      return count;
}

let text = 'I love JavaScript';
console.log(countWords(text));