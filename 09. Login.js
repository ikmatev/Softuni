function multy(numberOne) {
    let inputArr  = numberOne;
    let name = inputArr[0].split("");
    name.reverse();
    let pass = name.join("");
    for (let index = 1; index < inputArr.length; index++) {
        if (Number.isInteger(index/4) && index !=1) {
            console.log('User '+ inputArr[0] +' blocked!')
            break;
        }else if (inputArr[index] == pass) {
            console.log('User '+ inputArr[0] +' logged in.')
            break;
        }else {
            console.log('Incorrect password. Try again.')
        }; 
    }
}