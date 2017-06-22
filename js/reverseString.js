// reverseString(num)
//
// Define a function reverseString that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(num) {
  var numArray = num.split('')
  var reverseArray = []
  for (var i = num.length - 1; i >= 0; i--) {
    reverseArray.push(numArray[i])
  }
  var reverseString = reverseArray.join('')
  console.log(reverseString)
}

reverseString('jag testar')
