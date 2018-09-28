// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if (currency > 10000) {

        let result = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return (result);
    }

    if (currency <= 0) {

        let result = {};
        return (result);
    }

    else {

        let coins = [50, 25, 10, 5, 1];
        let nameCoins = ["H", "Q", "D", "N", "P"];
        let result = {};

        for (let i = 0; i <= coins.length; i++) {

            let prop = Math.floor(currency / coins[i]);

            currency = currency - prop * coins[i];

            if (prop === 0) continue;

            result[nameCoins[i]] = prop;

            if (currency === 0) break;

        }

        return (result);

    }
};