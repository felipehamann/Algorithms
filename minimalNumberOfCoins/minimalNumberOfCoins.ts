function minimalNumberOfCoins(coins: number[], price: number): number {
    let totalCoins: number = 0;

    for (let i = coins.length - 1; i >= 0; i--) {
        while (price >= coins[i]) {
            price -= coins[i];
            totalCoins++;
        }

        if (price === 0) {
            break;
        }
    }

    return totalCoins;
}
