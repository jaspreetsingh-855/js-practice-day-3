/*
51. Letter frequency in a string
Hint: Count letters and store as array pairs.
Array Example:
"hello" → [["h",1],["e",1],["l",2],["o",1]];
*/
function letterFrequency(str){
    let frequency = {};
    for(let i =0; i<str.length;i++){
        let char = str[i];
        if(frequency[char]){
            frequency[char]++;
    }
        else{
            frequency[char] = 1;
        }
}
    let result = [];
    for(let char in frequency){
        result.push([char, frequency[char]]);
    }
    return result;
}
console.log(letterFrequency("hello"));
