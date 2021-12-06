function map(sourceArray, work){
    let mapped = [];
    sourceArray.forEach(element => mapped.push(work(element)));
    return mapped;
}

function reduce(sourceArray, memo, startingPoint){
    let reduced;
    if (startingPoint){
        reduced = startingPoint;
        sourceArray.forEach(element => reduced = memo(element, reduced));
    } else {
        reduced = sourceArray[0];
        for (let i = 1; i < sourceArray.length; i++){
            reduced = memo(sourceArray[i], reduced)
        };
    }
    return reduced; 
}