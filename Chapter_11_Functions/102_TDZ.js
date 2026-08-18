var a = "Kiran";

if(true){
    console.log(a);
    var a = "temp";
    console.log(a);
}

{
    console.log(ab);
    let ab = 10;
}
//ReferenceError: Cannot access 'a' before initialization


// Enter Block
//  ↓
// a is created ✅
// a has NO value yet ❌
//     ↓
// console.log(a)  ❌ Error (TDZ)
//     ↓
// let a = 10;
//     ↓
// a = 10 ✅

