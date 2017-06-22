// isCharacterAVowel(num)
//
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.
function isCharacterAVowel(num) {
  if (num === 'a' ||
      num === 'e' ||
      num === 'i' ||
      num === 'o' ||
      num === 'u' ||
      num === 'A' ||
      num === 'E' ||
      num === 'I' ||
      num === 'O' ||
      num === 'U'
    ) {
      console.log('It is a vowel!')
    } else {
      console.log('It is not a vowel!')
    }
}

isCharacterAVowel('a')
isCharacterAVowel('b')
isCharacterAVowel('c')
isCharacterAVowel('d')
isCharacterAVowel('E')
