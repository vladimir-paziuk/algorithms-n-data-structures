// Best Time to Buy and Sell Stock

const prices1 = [7, 1, 5, 3, 6, 4]; // Multiple - 7 // Single - 5
const prices2 = [7, 6, 4, 3, 1]; // 0

/*
    Able to buy and sell multiple times
    O(n)

    1 Compare current with previous in loop
    2 If current is greater - add to result difference between current and previous
*/
function maxProfitMultiple(prices) {
    let result = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            result += prices[i] - prices[i - 1];
        }
    }
    return result;
}

/*
    Able to buy and sell only once
    O(n)

    1 Set min price from current and compare with difference between current in the same loop
    2 Return the greater difference between current and min price
*/
function maxProfitSingle(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const current = prices[i];

        minPrice = Math.min(minPrice, current);

        if (current - minPrice > maxProfit) {
            maxProfit = current - minPrice;
        }
    }
    return maxProfit;
}

console.log(maxProfitMultiple(prices1), maxProfitSingle(prices1));
console.log(maxProfitMultiple(prices2), maxProfitSingle(prices2));
