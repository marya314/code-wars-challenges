//Code Wars IQ Test

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
//
// Examples :
//
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
//
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(num) {

    num = num.split(" ")
    for(var i=0; i<num.length; i++)
    { num[i] = parseInt(num[i]); }

    var evens = num.filter((x) => {
      return (x % 2 == 0);
  });

    var odds = num.filter((x, index) => {
      return x % 2 !== 0;
  });

    if(evens.length > odds.length) {
        odds = odds[0];
        return num.indexOf(odds) + 1;
    } else {
        evens = evens[0];
        return num.indexOf(evens) + 1;
    }

}

//Code Wars - Are they the "same"?

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
//
// Examples
//
// Valid arrays
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
