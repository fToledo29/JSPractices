/**
 * Gets a string and returns an array of the diferent permutations 
 * possible with the given input.
 * @param {string} str String of characters to validate the permutations
 * @returns Array of strings.
 */
const getPermutations = (str = '') => {

	if (str.length === 1) {
		return str;
	}

	let permutations = [];

	for (let i = 0; i < str.length; i++) {
		const current = str[i];
		const remain = str.slice(0, i) + str.slice(i + 1);
		const inner =  getPermutations(remain);
		for (const char of inner) {
			if (current !== char) {
				permutations.push(char + current);
			}
		}
		
	}

	return permutations;
}

module.exports = {
	getPermutations
}

// console.log(getPermutations('abcd').length);