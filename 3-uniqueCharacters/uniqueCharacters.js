const uniqueCharacters = (str = '') => {
	let container = {};
	let max = 0;
	for (const letter of str) {
		container[letter] = !container[letter] ? 1 : ++container[letter];
		if (container[letter] > max) {
			max += 1;
		}

		if (max > 1) {
			return false;
		}
	}

	return true;
}

module.exports = {
	uniqueCharacters
}