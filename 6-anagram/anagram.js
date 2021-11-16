/**
 * Gets a string and returns an object with alll the charactes of the input.
 * @param {string} str String from where to get the object.
 * @returns Object
 */
const getObj = (str) => {
	const obj = {};
	for (const char of str.replace(/[\W]/g, '').toLowerCase()) {
		obj[char] = obj[char] + 1 || 1;
	}
	return obj;
}

/**
 * Gets two strings and validates if it's an anagram of each other.
 * @param {string} str1 String to validate if it's an anagram of the next parameter.
 * @param {string} str2 String to validate if it's an anagram.
 * @returns boolean
 */
const isAnagram = (str1, str2) => {

	const word1 = getObj(str1);
	const word2 = getObj(str2);

	if (Object.keys(word1).length !== Object.keys(word2).length) {
		return false;
	}

	for (const key in word1) {
		if(word1[key] !== word2[key]) {
			return false;
		}
	}

	return true;
}

module.exports = {
	isAnagram,
	getObj
}

// console.log(getObj('otamot%%'));
// console.log(getObj('rail safety'));