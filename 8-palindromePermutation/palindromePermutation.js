/**
 * Validates if a given string can do permutations 
 * so it be a palindrome.
 * @param {string} str Sentence or word to be validated
 * @returns boolean
 */
const palindromePermutations = (str = '') => {
	let hash = new Map();
	let cnt = 0;
	for (const char of str.toLowerCase().replace(/[\W]/g, '')) {

		if (hash.get(char)) {
			hash.delete(char);
		} else {
			hash.set(char, true);
		}
		cnt++;
	}

	return (cnt % 2 === 0) ? hash.size === 0 : hash.size === 1;
}

module.exports = {
	palindromePermutations
}

// console.log(palindromePermutations('taco cat'));