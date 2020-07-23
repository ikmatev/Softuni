function multy(numOne) {
    let num;
    if (typeof(numOne) === 'string') {
        num = numOne;
    }else{
        num = numOne.toString();
    }
    let sum = 0;
    let isMagic = false;

    for (let index = 0; index < num.length; index++) {
        sum += Number(num[index]);        
    }
    let sumString = sum.toString();
    for (let i = 0; i < sumString.length; i++) {
        if (sumString[i] === '9') {
            isMagic = true;
        }
    }
    if (isMagic) {
        console.log(`${numOne} Amazing? True`)
    }else{
        console.log(`${numOne} Amazing? False`)
    }
}