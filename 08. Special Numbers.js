function multy(number) {

    for (let i = 1; i <= number; i++) {
        let sum = 0;
        let number = i.toString();
        for (let c = 0; c < number.length; c++) {
            sum +=   Number(number[c]);          
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`)
        }else{
            console.log(`${i} -> False`)
        }

    }
}