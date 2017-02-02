//Description:

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    str1 = str.toLowerCase().split("x")
    var x = str1.length-1;

    str2 = str.toLowerCase().split("o")
    var o = str2.length-1;

    if(x == o) {
        return true
    } else {
        return false
    }
}
