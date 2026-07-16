let a = 12;
console.log(a);

for(let a=1;a<=100;a++){
    console.log(a);
    badCode();

}

function badCode(){
    console.log(a);
}