/*
48. Find longest word in a string
Hint: Split string into array and compare word lengths.
Array Example:
"I love JavaScript" → ["I","love","JavaScript"]
*/
 function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(findLongestWord("I love JavaScript"));
