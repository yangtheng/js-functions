// isPrime(num)
//
// Create a function to return true or false if a number passed in a prime number.
function isPrime(num) {
  if (num > 0) {
    var isPrime = true
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false
      }
    }
  }
  console.log('Number is ' + isPrime)
}

isPrime(1)
isPrime(3)
isPrime(6)
isPrime(7)
