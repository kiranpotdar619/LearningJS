let statusCode = [200,404,201];

console.log(statusCode);
statusCode.push(504);

console.log(statusCode);
statusCode.pop();

console.log(statusCode);

//add at beginning

statusCode.unshift(100);
console.log(statusCode);

//remove from start
statusCode.shift();
console.log(statusCode);
