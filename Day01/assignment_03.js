//Conditional Statement if-else and switch cases

let browserName = "Chrome"
let testType = "Test"
launchBrowser()
runTests()

function launchBrowser(){
    if (browserName==="Chrome") {
        console.log("The Browser to Launch is " + browserName)
    }
    else{
        console.log("The Browser to launch is " + browserName)
    }
}

function runTests(){
    switch (testType) {
        case "Sanity","Test":
            console.log("The Test Type is " + testType)
            break;
        case "Regression":
            console.log("The Test Type is " + testType)
            break;
        default:
            console.log("The Test Type is " + testType)
            break;        
    }
}