function multy(numberOne, numberTwo) {
    let base  = numberOne;
    let increment = numberTwo;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold  = 0;
    let counter = 1;
    let floor = base;
    while (floor > 0) {
        let face = floor * floor;
        if (floor > 0 && floor <= 2) {
            gold += face;
        }else if (Number.isInteger(counter/5) && floor > 0) {
            stone += (floor -2) * (floor -2);
            lapisLazuli += face - ((floor -2) * (floor -2))
        }else{
            stone += (floor -2) * (floor -2);
            marble += face - ((floor -2) * (floor -2))
        }
        floor -= 2;
        counter++;
    }
    console.log('Stone required: ' + Math.ceil(stone * increment));
    console.log('Marble required: ' + Math.ceil(marble * increment));
    console.log('Lapis Lazuli required: ' + Math.ceil(lapisLazuli * increment));
    console.log('Gold required: ' + Math.ceil(gold * increment));
    console.log('Final pyramid height: ' + Math.floor((counter -1 ) * increment));
}
