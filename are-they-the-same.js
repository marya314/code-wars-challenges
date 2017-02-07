//Code Wars - Are they the "same"?

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
//
// Examples
//
// Valid arrays
//
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// square the elements in the a array.
//check to see if those elements appear in b array.

function comp(a, b){
    // a = [121, 144, 19, 161, 19, 144, 19, 11]
    // b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

    if(a.length !== b.length) {return false};

    var sqArray = a.map(el => {return el * el }).sort(function(a,b){return a-b}) // square the first array and sort it
    var sortedArray = b.sort(function(a,b){return a-b}) // sort the second, already squared array

    //check the arrays for equal values
    for(i=0; i<sqArray.length; i++){
        if (sqArray[i] !== sortedArray[i]) {return false}
    }

    return true;

}
