//Palindromes Here and There
// An array is given with palindromic and non-palindromic numbers. Palindromic number is a number that is the same from a reveresed order. For example 122 is not a palindromic number but 202 is one.
//
// Your task is to write a function that returns an array with only 1s and 0s, where all palindromic number is replaced with a 1 and all non-palindromic number of the original array replaced with a 0.
//
// For example:
//
// [101, 2, 85, 33, 14014] will return [1, 1, 0, 1, 0]
//
// and [45, 21, 303, 56] will return [0, 0, 1, 0]

function convertPalindromes(numbers) {

    numStr = numbers.map(String)

    //create new array with string integers reversed
    rev = numStr.map((x)=>{return x.split("").reverse().join("")});

    //compare two arrays for equal values (indicating palindrome)
    newArr = []
    for(i=0; i<numStr.length; i++) {
      if (numStr[i] == rev[i]) {
        newArr.push(1)
      } else {
        newArr.push(0)
      }
    }

    return newArr
};
