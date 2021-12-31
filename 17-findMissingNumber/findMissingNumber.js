
const findMissingNumber = (arr = []) => {

	/**
	 * We can get Max and min values with Math utility.
	 * const min = Math.min(...arr);  // O (n)
	 * const max = Math.max(...arr);  // O (n)
	 */
	let max = -Infinity;
	let min = Infinity;
	for (const num of arr) { // O (n)
		if(num > max) {
			max = num;
		}
	}
	for (const num of arr) { // O (n)
		if(num < min) {
			min = num;
		}
	}
	
	for (let i = min; i <= max; i++) { // O (n)
		if(arr.indexOf(i) < 0) {
			return i;
		}
	}

	return null;
};

module.exports = {
	findMissingNumber,
};