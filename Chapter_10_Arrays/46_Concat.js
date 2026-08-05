let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
// ... all the eleement
let d = [...a,...b];
console.log(d);

// Join : Adds all the elements of an array into a string, separated by the specified separator string
// array into bug string
let s = ["pass", "fail", "skip"].join("");
console.log(s);
console.log(s[1]);