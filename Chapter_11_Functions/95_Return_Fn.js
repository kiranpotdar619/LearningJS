function getStatus(code) {
    if (code >= 200 && code < 300) {
        return "Success";
    } else if (code >= 400 && code < 500) {
        return "client error";
    } else if (code >= 500) {
        return "server error";
    } else {
        return "unknown";
    }
}
console.log(
getStatus(200)+"\n"+ 
getStatus(404)+"\n"+
getStatus(500)
);

// Returns nothing → undefined
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}
//logTest();
logTest("Hi this is a a log");


function aaa() {
    return [2, 2, 3, 5, 4];
    /// return {"name : kiran"}; - object
}
console.log(aaa());