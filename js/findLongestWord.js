// findLongestWord(arr)
//
// Write a function findLongestWord that takes an array of words and returns the length of the longest word in the array.

function findLongestWord(arr) {
  var longestWord = ""
  var longestWords = []
  for (var i = 0; i < arr.length; i++) {
    if (longestWord.length < arr[i].length) {
      longestWord = arr[i]
    } else if (longestWord.length === arr[i].length) {
      longestWords.push(arr[i])
    }
  }
  longestWords.push(longestWord)
  var longestWordsStr = longestWords.toString()
  console.log(longestWordsStr)
}

findLongestWord(['kiss', 'booty', 'grudge'])
findLongestWord(['kiss', 'booty', 'grudge', 'monkey'])
findLongestWord(['fish', 'fishcake', 'dictionary', 'gloss', 'jack'])
