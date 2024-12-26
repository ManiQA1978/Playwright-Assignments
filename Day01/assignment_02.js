var browserVersion
let browser="Edge"

getBrowserVersion()
function getBrowserVersion(){
    if(browser=="Chrome") 
        browserVersion=12
    else
        browserVersion=10
    
    console.log("Browser Version is " + browserVersion)
}