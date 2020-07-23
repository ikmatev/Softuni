function multy(numberOne) {
    let input = numberOne;
    let divedable = [2,3,6,7,10];
    let output;
    let outputText;

    divedable.forEach(element => {
        if (Number.isInteger(input/element)) {
            output = element;
        }
    });

    if (output) {
        outputText = 'The number is divisible by ' + output;
    }else{
        outputText = 'Not divisible';
    }
    console.log(outputText);
    


}