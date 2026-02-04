/*
34. Create a function that returns an array of words from a text.
Example:
Input: "I love JS"
Output: ["I", "love", "JS"]
*/

function getWords(text) {
  // trim() use kitta extra spaces remove lyi
  // split kitta string nu array ch covert karan lyi
  return text.trim().split(" ");
}


const result = getWords("I love JS");
console.log(result); 
