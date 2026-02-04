/*
32. Create a function that will capitalize the first letter of each word in a text.
Example:
Input: "i love javascript"
Output: "I Love Javascript"
*/
function capitalizeWords(text){
    let result =  '';
    let capitalizeNext = true;
    for(let i =0; i<text.length; i++){
        if(text[i]===''){
            result += text[i];
            capitalizeNext = true;
        }
        else {}
        }
    }


let text = 'i love javascript';
console.log(capitalizeWords(text));