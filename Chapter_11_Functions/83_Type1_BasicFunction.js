// Type 1 - No param, No Return -> final retunr undefined.
// Define
function greet(){
    console.log("Hi");
}
// No Param and no Return (void)

// Call
console.log("First");
greet();

console.log("Second");
greet();

console.log("Third");
greet();

let output = greet();
console.log("Output: "+output); //undefined bcoz function is not returning anything


function openBrowser(){
    console.log("Open Browser");
    // open the brower
    
}
openBrowser(); //calling function