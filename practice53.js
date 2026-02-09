/*53. Calculate 70!
Hint: Multiply numbers from 1 to 70 using BigInt.
Array Example:
70 × 69 × 68 × ... × 1
*/
let fact = 1n;

for (let i = 1n; i <= 70n; i++) {
    fact *= i;
}

console.log(fact);

