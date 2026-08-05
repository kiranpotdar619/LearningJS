let nums = [10, 25, 30, 45];

//find :Returns the value of the first element in the array where predicate is true, 
// and undefined otherwise.
let result = nums.find(temp => temp > 20);
console.log(result);

// findIndex :Returns the index of the first element in the array where predicate is true, 
//and -1 otherwise.
let index = nums.findIndex(n => n > 20);
console.log(index);


nums.findLast(n => n > 20); //  45
nums.findLastIndex(n => n > 20); // 3