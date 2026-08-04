let score = [45,54,82,90,75];
let grades = score.map(s=>s>65?"Pass":"Fail");

console.log(grades);

let marks = score.filter(s=>s>=65);
console.log(marks);