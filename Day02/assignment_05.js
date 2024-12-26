//Reverse the String

function reverseString(str) {
    let actualString = str
    let reverseString = ""
    let length = actualString.length
    for (let i = length - 1; i >= 0; i--) {
        reverseString += actualString[i]
    }
    console.log(reverseString) 
    // return reverseString
}

function inbuiltReverseString(str) {
    let actualString = str
    let reverseString = actualString.split("").reverse().join("")
    console.log(reverseString) 
    // return reverseString
}

reverseString("Manikandan") 
inbuiltReverseString("Hello World")

//SubString
//Slice
//replace
//replaceAll
//Regular Expression
let price = "Rs.1924"
let newPrice = price.replaceAll(/[^0-9]/g, "")
console.log(newPrice)
let intPrice = parseInt(newPrice)
console.log(intPrice+24)
