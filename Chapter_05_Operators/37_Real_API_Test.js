let responseCode = 504;

switch (responseCode) {

    case 200:
        console.log("200 Ok");
        break;
    case 404:
        console.log("404 Not found!");
        break;
    case 504:
        console.log("Internal Server Error.");
        break;
    default:
        console.log("Not status code match");

}