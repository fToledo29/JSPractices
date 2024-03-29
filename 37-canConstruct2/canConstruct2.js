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
const canConstruct2 = (target = '', words = []) => {
	
	let arr = Array(target.length + 1).fill(false);

	arr[0] = true;

	for (let i = 0; i <= target.length; i++) {
		if (!arr[i]) continue;
		for (const word of words) {
			if (target.slice(i, i + word.length) === word) {
				arr[word.length + i] = true;
			}
		}
	}

	return arr[target.length];
}

module.exports = {
	canConstruct2
};