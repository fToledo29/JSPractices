const howSum2 = (target, nums) => {
	let arr = Array(target + 1).fill(null);
	arr[0] = [];

	for (let i = 0; i < target; i++) {
		if (!arr[i]) continue;
		for (const num of nums) {
			arr[i + num] = [...arr[i], num];
		}
		
	}
	return arr[target];
};

module.exports = {
	howSum2
};
