let arr = [1,'a',"del",3.12];
console.log(arr);

for(let a of arr){
    console.log(a);

}
console.log("--------------");
arr.forEach((a,index)=>{
    console.log(`${index}:${a}`);
});


console.log("--------------");

for(let[i,a] of arr.entries()){
    console.log(i,a);
}