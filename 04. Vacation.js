function multy(numberOne, studentsType ,day ) {
    let numberStudents = numberOne;
    let type = studentsType;
    let dayOfWeek = day;
    let divedable = [
        ['Friday', 'Students', 8.45],
        ['Friday', 'Business', 10.9],
        ['Friday', 'Regular', 15],
        ['Saturday', 'Students', 9.8],
        ['Saturday', 'Business', 15.60],
        ['Saturday', 'Regular', 20],
        ['Sunday', 'Students', 10.46],
        ['Sunday', 'Business', 16],
        ['Sunday', 'Regular', 22.50],
    ];
    let outputText = 'Total price: ';

    divedable.forEach(element => {
        if (element[0] == dayOfWeek && element[1] == type) {
            let tarif = element[2];
            let cost;
            if (type == 'Students' && numberStudents >= 30) {
                cost = tarif * numberStudents;
                cost -= cost * 15/100;
            }else if (type == 'Business' && numberStudents >= 100) {
                cost = (tarif * numberStudents)-(Math.floor(numberStudents/10) * tarif);
            }else if (type == 'Regular' && numberStudents >= 10 && numberStudents <= 20) {
                cost = tarif * numberStudents;
                cost -= cost * 5/100;
            }else{
                cost = tarif*numberStudents;
            }
            outputText += cost.toFixed(2);
        }
    });

    console.log(outputText);
    


}