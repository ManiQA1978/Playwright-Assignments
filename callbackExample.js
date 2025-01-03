//To use callbacks to handle asynchronous tasks in JavaScript

let browserName = "Chrome"

function checkBrowserVersion(callbackBrowser) {
    setTimeout(() => {
        callbackBrowser(browserName)       
    }, 2000)
}

function callbackBrowser(browserName) {
    console.log("Browser version using callback: " + browserName)
}

checkBrowserVersion(callbackBrowser)