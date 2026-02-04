/*
35. Create a function to convert a CSV text into a two-dimensional array.
Example:

var data =
    "John;Smith;954-080-0800\n" +
    "Mich;Tiger;305-000-0000\n" +
    "Monique;Vasquez;103-000-0000";

Output:
[
  ["John", "Smith", "954-080-0800"],
  ["Mich", "Tiger", "305-000-0000"],
  ["Monique", "Vasquez", "103-000-0000"]
]
*/

function csvToArray(csvText){
let string= JSON.stringify(csvText);
let rows = string.split('\n');
let result = [];
for(let i=0; i<rows.length;i++){
    let colomns = rows[i].split(';');
    result.push(colomns);
    }
    
    return result;
}
    let data =  "John;Smith;954-080-0800\n" +
    "Mich;Tiger;305-000-0000\n" +
    "Monique;Vasquez;103-000-0000";
    console.log(csvToArray(data));