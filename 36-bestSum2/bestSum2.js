const bestSum2 = (target, nums) => {
	let arr = Array(target + 1).fill(null);
	arr[0] = [];

	for (let i = 0; i <= target; i++) {
		if (!arr[i]) continue;
		for (const num of nums) {
			const res = [...arr[i], num];
			if (!arr[num + i] || res.length < arr[num + i].length) {
				arr[num + i] = res;
			}
		}
	}

	return arr[target];
}

module.exports = {
	bestSum2
};
