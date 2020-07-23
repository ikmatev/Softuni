function multy(numberOne, numberTwo) {
    let startNum  = numberOne;
    let endNum = numberTwo;
    let output;
    let sum = 0;

    for (let index = startNum; index <= endNum; index++) {
        sum+= index;
        if (output) {
            output += ' ' + index.toString();
        }else {
            output = index.toString();
        }
    }

    console.log(output);
    console.log('Sum: ' + sum);

}