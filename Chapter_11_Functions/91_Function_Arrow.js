function doubleMe(a){
    return a*2;
}

const doubtA = (a)=> a*2+9;
console.log(doubtA(10)); //29

const getEnv = () => "staging";
console.log(getEnv());

//Mutiline
const getResult = (score) => {
    if(score > 70) return "Pass";
    return "fail";
}

console.log(getResult(78));
console.log(getResult(43));