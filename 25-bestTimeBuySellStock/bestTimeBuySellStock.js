/**
 * You are given an array prices where prices[i] 
 * is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a 
 * single day to buy one stock and choosing a different 
 * day in the future to sell that stock.
 * 
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 * 
 * Example:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on 
 * day 5 (price = 6), profit = 6-1 = 5.
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let x = 0;
    let bigProf = 0;
    let minProf = prices[0];
    while (x < prices.length) {
        if(prices[x] < minProf) {
            minProf = prices[x];
        }
        if (prices[x]  - minProf > bigProf) {
            bigProf = prices[x] - minProf;
        }
        x++;
    }
    return bigProf;
};

module.exports = {
	maxProfit
};
