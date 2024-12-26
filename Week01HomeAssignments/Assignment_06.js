//To determine whether two given strings have the same characters, regardless of their order, and identify if
// they are anagrams of each other.

findAnagram("angel", "glean")

function findAnagram(word1, word2) {
    let text1 = word1
    let text2 = word2
    //Check if the words are the same length
    if (word1.length !== word2.length) {
           console.log("Given words Length mismatch, therefore the strings are not an Anagram")    }
    else{
         //Convert the words to character arrays and Sort the arrays and Join the arrays
        word1 = word1.split('').sort().join('')
        word2 = word2.split('').sort().join('')
        if (word1===word2) {
            console.log(`Given words ${text1} and ${text2} are of same length, therefore the strings are an Anagram`)            
        }else{
            console.log(`Given words ${text1} and ${text2} are of same length, therefore the strings are not an Anagram`)            
        }
    }
}