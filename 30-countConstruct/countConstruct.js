/**
 *
 * Given a string target and an array of strings words, 
 * count how many times target can be constructed by any of
 * the strings contained on the array words.
 * 
 * Return the number of possible times target can be constructed 
 * with words items; return 0 if it's not possible to construct 
 * the target.
 */
const countConstruct = (target = '', words = [], memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return 1;

	let counter = 0;

	for (let word of words) {
		
		if (target.indexOf(word) === 0) {
			const sufix = target.slice(word.length);
			counter += countConstruct(sufix, words, memo);
		}
	}
	memo[target] = counter;
	return counter;
}

module.exports = {
	countConstruct
};