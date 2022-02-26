let canSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;

    for (let num of numbers) {
        if (canSum(target - num, numbers, memo)) {
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
}

module.exports = {
	canSum
};