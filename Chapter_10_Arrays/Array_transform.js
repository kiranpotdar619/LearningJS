let grades = [56,67,98,73,48];

//Map : Calls a defined callback function on each element of an array,
//  and returns an array that contains the results.

let result = grades.map(grade => grade >70 ? "Pass":"Fail");
console.log(result);

//filter : Returns the elements of an array that meet the condition specified in a callback function.

let passing = grades.filter(s => s >60)
console.log(passing);

let total = grades.reduce((sum,s)=>sum+s,0);
console.log("Total : "+total);

grades.so