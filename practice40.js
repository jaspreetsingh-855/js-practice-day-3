//40. Implement the Bubble Sort algorithm for an array of numbers.
//Example:
//Input: [5,3,1,4]
//Output: [1,3,4,5];

function bubbleSort(arr){
    let n = arr.length;
    for(let i =0; i<n-1;i++){
        for(let j =0; j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
               let temp = arr[j];
               arr[j]=arr[j+1];
               arr[j+1]=temp;

            }

        }

    }
    return arr;
}
let numbers = [5,3,1,4];
console.log(bubbleSort(numbers));