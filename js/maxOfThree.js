// maxOfThree(num1, num2, num3)
//
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function maxOfThree(num1,num2,num3) {
  var maxOfThree = 0;
  if (num1 >= num2 && num1 >= num3) {
    maxOfThree = num1
  } else if (num2 >= num1 && num2 >= num3) {
    maxOfThree = num2
  } else if (num3 >= num1 && num3 >= num2) {
    maxOfThree = num3
  }
  return maxOfThree
}

console.log(maxOfThree(3,8,5))
console.log(maxOfThree(30,58,15))
console.log(maxOfThree(23,83,15))
console.log(maxOfThree(312,84,45))
