# Functions - Problem Set

These problems will use your knowledge of looping and conditionals, and we will build functions on top of that.

## Getting Started

* Fork and clone this repository
* Solve the problems below in separate files, located in `js`
* Run `node js/nameOfFile.js` to execute code

---

## Problems

### maxOfThree(num1, num2, num3)

Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. 

---

### isCharacterAVowel(num)

Write a function `isCharacterAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

---

### sumArray(arr)

Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

---

### sillySum(arr)

Write a function that takes an array of numbers, and returns the sum of each number multiplied by its index.

`count += (number * index)`

---

### reverseString(num)

Define a function `reverseString` that reverses a string. For example, reverseString("jag testar") should return the string "ratset gaj".

---

### findLongestWord(arr)

Write a function `findLongestWord` that takes an array of words and returns the length of the longest word in the array.

---

### letterCount(word)

Write a function that takes a string that finds out how many times a character occurs.  For example, the string "apple" would print the following:

```
a - 1
p - 2
l - 1
e - 1
```

**Hint**: Loop through each letter, and increment the value to a key in an object. The key should be that object.

**BONUS**: Make sure that lower case letters and upper case letters count for the same character.  Also, ignore spaces and punctuation.

---

### isPrime(num)
Create a function to return `true` or `false` if a number passed in a prime number.

---

### primes(max)
Using your `isPrime()` function, create a function `primes` that will return an array of all prime numbers up to a certain amount.

---

## BONUS

### merge(arr1, arr2)

Write a function called ```merge```.  The function should take two sorted arrays of numbers as input and return a merged array of the sorted numbers from the input.  For example, if the input arrays were `var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9];`  Then the returned array would be: `[2,3,4,5,6,8,9,11]`.

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
