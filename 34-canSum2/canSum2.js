const canSum2 = (target, nums) => {
	let arr = Array(target + 1).fill(false);
	arr[0] = true;
	for (let i = 0; i <= target; i++) {
		if (!arr[i]) continue;
		for (let num of nums) {
			arr[i + num] = true;
		}
		
	}
	return arr[target];
}

module.exports = {
	canSum2
};
