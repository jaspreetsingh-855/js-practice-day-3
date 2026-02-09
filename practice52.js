/*
52. Fibonacci(500)
Hint: Use BigInt to store large numbers.
Array Example:
0, 1, 1, 2, 3, 5, ...
*/
function fibonacci(n){
    let a = 0n, b = 1n, temp;
    for(let i =0; i<n; i++){
        temp = a;
        a = b;
        b = temp+a;

    }
    return a;
}
console.log(fibonacci(500));

