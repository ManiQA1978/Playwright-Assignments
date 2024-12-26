//to change characters at odd indices to uppercase.

oddIndicesConvertUppercase("manikandan") 
function oddIndicesConvertUppercase(text) {
    let StrResult = ''
    strCharArray = text.split('')
    for (let i = 0; i < strCharArray.length; i++) {
        if (i % 2 !== 0) {
            strCharArray[i] = strCharArray[i].toUpperCase()
        }
        // StrResult += strCharArray[i]        
    }
    StrResult = strCharArray.join('')
    console.log(StrResult)    
}