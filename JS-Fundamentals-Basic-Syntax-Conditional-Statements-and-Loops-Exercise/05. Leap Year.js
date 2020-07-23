function multy(numberOne) {
    let input  = numberOne;
    let outputText;
    if (input == 0) {
        outputText = 'yes';
    }else if ((Number.isInteger(input/4) && !Number.isInteger(input/100) || Number.isInteger(input/400))) {
        outputText = 'yes';
    }else{
        outputText = 'no';
    }
    console.log(outputText);
}
