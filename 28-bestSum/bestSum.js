const bestSum = (target, nums, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === 0) return [];
	if (target < 0) return null;

	let shortest = null;

	for (const num of nums) {
		const remain = target - num;
		const remainRes = bestSum(remain, nums, memo);
		if (remainRes) {
			const combination = [...remainRes, num];
			if ( !shortest || combination.length < shortest.length) {
				shortest = combination;
			}
		}
	}
	memo[target] = shortest;
	return shortest;
}

module.exports = {
	bestSum
};