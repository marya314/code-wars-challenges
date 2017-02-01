// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//
// For example:
//
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
//  persistence(4) === 0 // because 4 is already a one-digit number

//First Solution:
function persistence(num) {

    var loopCounter = 0;  // counting the number of while loops
    num = num.toString();

    while(num.length > 1){ // while the string is greater than 1
        loopCounter++; //incrementing loop
        num.split(""); //["3", "9"]

        product = 1 // setting the first number in the array
        for(i=0; i<num.length; i++){ // looping over the array
            product = product * num[i] // 27
        }
        num = product.toString(); //changing num back to a string so it can go through while loop again
    }
    return loopCounter //returning number of while loops
}

//Refactored Solution:
function persistence(num) {

    var loopCounter = 0;
    num = num.toString();

    while(num.length > 1){
        loopCounter++;
        num = num.split("").reduce((a, b) => a * b).toString() //uses reduce instead of for loop
    }
    
    return loopCounter
}
