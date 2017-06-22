// primes(max)
//
// Using your isPrime() function, create a function primes that will return an array of all prime numbers up to a certain amount.
function isPrime(num) {
  if (num > 0) {
    var isPrime = true
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false
      }
    }
  }
  return isPrime
}
function primes(max) {
  var primesArray = []
  for (var i = 1; i <= max; i++) {
    isPrime(i)
    if (isPrime(i) === true) {
      primesArray.push(i)
    }
  }
  console.log(primesArray)
}

primes(88)
