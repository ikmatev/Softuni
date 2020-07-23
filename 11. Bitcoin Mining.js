function multy(array) {
    let input = array;
    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;
    let dayOfFirstBuy = 0;
    let amountOfBitcoins = 0;
    let money = 0;
    let counter = 1;
    input.forEach(element => {
        let dailyGoldMined = element;
        if (Number.isInteger(counter /3)) {
            dailyGoldMined -= dailyGoldMined * 30/100;
        }
        money += (dailyGoldMined * goldPrice);
            while (money - bitcoinPrice > 0) {
                if (dayOfFirstBuy == 0) {
                    dayOfFirstBuy = counter;
                }
                amountOfBitcoins++;
                money -= bitcoinPrice;   
            }
        counter++;
    });
    console.log('Bought bitcoins: ' + amountOfBitcoins);
    if (dayOfFirstBuy > 0) {
        console.log('Day of the first purchased bitcoin: ' + dayOfFirstBuy);
    }
    console.log('Left money: ' + money.toFixed(2) + ' lv.');
}