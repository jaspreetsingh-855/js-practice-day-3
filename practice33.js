//33. Calculate the sum of numbers received in a comma-delimited string.
//Example:
//Input: "10,20,30,40"
//Output: 100
function sumStringNumbers(text){
    let numbers = text.split(','); 
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum += Number(numbers[i]);
    }
    return sum;
}

let text = '10,20,30,40';
console.log(sumStringNumbers(text));