var a = 10;
console.log(a); // 10
// Var - Function Scoped(), Traitor
console.log("--------------");
// Define
function printHello(){
    console.log("Hello TheTestingAcademy");
    var a = 20;
    console.log(a); // 20
    if(true){
        var a = 30;
        console.log(a); // 30
    }
    console.log(a); //20

}

printHello();
console.log("--------------");

// let - Block Scoped

let b =20; // Global Scope
console.log(b); //  20

console.log("--------------");

function printhello(){
        console.log("Hello TheTestingAcademy!");
        let b = 30; // Local Scope
        console.log(b); // 30
        if(true){
            let b = 5;
            console.log(b); // 5
        }
        console.log("let ->",b);   // 30
}

// Calling of the function
printhello();
console.log("--------------");
console.log(b);

// Let does not allow you to have a re-declaration. 
// let a = 10;
// let a = 10;

console.log("--------------");
// var allow you to have a re-declaration 
var a =11;
var a = 100;
console.log("a : "+a);
// let nn = "Kiran";
// var nn = "Kiran"; 

const pi = 3.14;
console.log(pi);
pi = 3.14159; // Assignment to constant variable.
console.log("--------------");
{

}

const a1 = [1,2,3];
a1.push(10);

console.log("--------------");
function adasd(){

}
console.log(adasd());