function multy(numberOne) {
    
    var output;
    if (numberOne < 0 ) {
        output = 'out of bounds';
    }else if (numberOne >= 0 && numberOne <= 2) {
        output = 'baby';
    }else if (numberOne >= 3 && numberOne <= 13){
        output = 'child';
    }else if (numberOne >= 14 && numberOne <= 19)  {
        output = 'teenager';
    }else if (numberOne >= 20 && numberOne <= 65)  {
        output = 'adult';
    }else if (numberOne >= 65)  {
        output = 'elder';
    }
    console.log(output);
    


}