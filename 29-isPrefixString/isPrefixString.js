/**
 * Check If String Is a Prefix of Array
 * Given a string s and an array of strings words, 
 * determine whether s is a prefix string of words.
 * 
 * A string s is a prefix string of words if s can 
 * be made by concatenating the first k strings in 
 * words for some positive k no larger than words.length.
 * 
 * Return true if s is a prefix string of words, or false otherwise.
 */
const isPrefixString = (s, words = [], memo = {}) => {
	if (s in memo) return memo[s];
	if (s === '') return true;

	for (let word of words) {
		if (s.indexOf(word) === 0) {
			let sufix = s.slice(word.length);
			if (isPrefixString(sufix, words, memo)) {
				memo[s] = true;
				return memo[s];
			}
		}
	}
	memo[s] = false;
	return memo[s];
};

module.exports = {
	isPrefixString
};