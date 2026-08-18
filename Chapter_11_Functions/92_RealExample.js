//Normal Function
function validateStatusCode(status)
{
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
    else {
        console.log("Try Again");
    }
    
}
//Function as expression
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
    else {
        console.log("Try Again");
    }
}

//Arrow function
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
    else {
        console.log("Try Again");
    }
}

validateStatusCode(200);
validateStatusCode_Exp(400);
validateStatusCode_Arrow(200);