function multy(numOne , numTwo, numThree) {
    let sum = numOne + numTwo + numThree;
    
    if (sum % 1 !== 0) {
        console.log( sum + ' - Float')
    }else{
        console.log( sum + ' - Integer')
    }
}