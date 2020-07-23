function multy(numberOne, numberTwo) {
    let input = numberOne;
    let precision = numberTwo;
    let output;

    if (precision > 15) {
        precision = 15;
    } 
    output= input.toFixed(precision);  
    console.log(parseFloat(output));
    


}