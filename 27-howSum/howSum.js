const howSum = (target, nums, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === 0) return [];
	if (target < 0) return null;

	for (let num of nums) {
		let remain = target - num;
		let remainRes = howSum(remain, nums, memo);
		if (remainRes) {
			memo[target] = [...remainRes, num];
			return memo[target];
		}
	}

	memo[target] = null;
	return null;
}

module.exports = {
	howSum
};