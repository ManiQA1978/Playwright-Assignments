//to build a logic to reverse the odd position words

reverseOddPostionWords("This is a test string")
function reverseOddPostionWords(strSentence) {
    let strResult = ''
    let strWords = strSentence.split(' ')
    for (let i = 0; i < strWords.length; i++) {
        if (i % 2 !== 0) {
            strWords[i] = strWords[i].split('').reverse().join('')
        }
    }
    strResult = strWords.join(' ')
    console.log(strResult)    
}