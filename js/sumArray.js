// sumArray(arr)
//
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray (arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
     sum += arr[i]
  }
  console.log(sum)
}

sumArray([1,2,3,4])

function multiplyArray (arr) {
  var product = 1
  for (var i = 0; i < arr.length; i++) {
     product *= arr[i]
  }
  console.log(product)
}

multiplyArray([1,2,3,4])
