var a = "Kiran";
// 10,000lines 
if(true){
    console.log(a); 
    var a = "temp";
}

// Temporal Dead Zone

// Global Scope
console.log(a);
 a = "Kian"
// Enter Block , Block Scope
// a = TDZ (exist but not initialized)
 console.log(a);