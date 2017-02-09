var uniqueInOrder=function(iterable){

    if(iterable.length == 0) return [];
    if(typeof iterable == "string") {iterable = iterable.split('')};

    var unique = [iterable[0]];
    iterable.reduce((prev, curr) => {
        if(prev != curr) {
            unique.push(curr);

        }
        return curr;
    })

    return unique;
}
