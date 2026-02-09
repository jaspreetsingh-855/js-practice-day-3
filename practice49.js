/*49. Shuffle an array of strings
Hint: Swap elements using random index.
Array Example:
["a","b","c","d"] → ["c","a","d","b"]
*/
function shuffleArray(arr){
    
    for(let i = arr.length - 1; i>0; i--){
        let j = Math.floor(Math.random()*(i+1)); // pics random index  from 0 to i
        [arr[i], arr[j]]= [arr[j], arr[i]];

    }
    return arr;
}
console.log(shuffleArray(["a","b","c","d"]));