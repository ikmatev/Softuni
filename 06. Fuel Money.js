function multy(distance, passangers, price) {
    let fuelConsumation = 70;
    let additionFuelConsumationPerPerson = 100;
    let usedFuel = (distance * fuelConsumation);
    let additionalWeight = (additionFuelConsumationPerPerson * passangers );
    let fuelTotal = usedFuel + additionalWeight;
    let test2 = (fuelTotal * price) / 1000;
    console.log(`Needed money for that trip is ${test2}lv.`)
}