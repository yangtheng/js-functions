// sillySum(arr)
//
// Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index.
//
// count += (number * index)

function sillySum(arr) {
  var sum = 0
  var numTimesIndex = 0
  for (var i = 0; i < arr.length; i++) {
    numTimesIndex = arr[i] * i
    sum += numTimesIndex
  }
  console.log(sum)
}

sillySum([2,3,4,5])
