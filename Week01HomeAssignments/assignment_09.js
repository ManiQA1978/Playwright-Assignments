//find character occurences in a string

findCharOccurences("This is a test string")
function findCharOccurences(strSentence) {
    let objResult = {}
    for (let i = 0; i < strSentence.length; i++) {
        if (objResult[strSentence[i]]) {
            objResult[strSentence[i]]++
        } else {
            objResult[strSentence[i]] = 1
        }
    }
    console.log(objResult)
}