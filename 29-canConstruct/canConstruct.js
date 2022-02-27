/**
 *
 * Given a string s and an array of strings words, 
 * determine whether s can be constructed by any of
 * the strings contained on the array words.
 * 
 * Return true if s can be constructed string with 
 * words items otherwise return false.
 */
const canConstruct = (s, words = [], memo = {}) => {
	if (s in memo) return memo[s];
	if (s === '') return true;

	for (let word of words) {
		if (s.indexOf(word) === 0) {
			let sufix = s.slice(word.length);
			if (canConstruct(sufix, words, memo)) {
				memo[s] = true;
				return memo[s];
			}
		}
	}
	memo[s] = false;
	return memo[s];
};

module.exports = {
	canConstruct
};