function multy(numberOne) {
    let input  = numberOne;
    for (let index = 1; index <= input; index++) {
        let output;
        for (let i = 1; i <= index; i++) {
            if (output) {
                output += ' ' + index;
            }else{
                output = index.toString();
            }
        }  
        console.log(output);      
    }


}
