printEvenOddNumbers()
function printEvenOddNumbers() {
    var resultEven = ""
    var resultOdd = ""
    for (let i = 20; i <= 50; i += 1) {
        if (i%2 === 0) {
            console.log("Even Numbers between 20 and 50: ", i)   
            resultEven += i + " "
            continue     
        }        
    else{    
        if (i%2 !== 0) {
            console.log("Odd Numbers between 20 and 50: ", i)   
            resultOdd += i + " "  
            continue   
        }
    }
}
    console.log(`Even Numbers Printed in Single Line ${resultEven}`)
    console.log(`Odd Numbers Printed in Single Line ${resultOdd}`)
    
}
