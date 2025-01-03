//how to create and use Promises in JavaScript.
// Create a Promise named `conditionalPromise` that resolves with the message `"Resolved successfully"` 
// if a random number is greater than 0.5, and rejects with the message `"Rejected"` otherwise.
// [Hint: Use Math.random()]
// - Use the `conditionalPromise` created to log the resolved or rejected value to the console using `.then` and `.catch`.

let conditionalPromise = new Promise(function(resolve,reject) {
    let random = Math.random()
    if (random > 0.5){
        resolve("Resolved successfully with Random Number : " + random)
    }else{
        reject("Rejected with Random Number : " + random)   
    }
})
.then((message) => {
    console.log(message)
})
.catch((message) => {
    console.log(message)
})  


