/**
 * Validates if a string is contained in another string.
 * @param {string} str1 String that may have permitations of another string.
 * @param {string} str2 String that may have permitations of another string.
 * @returns boolean
 */
const stringWithPermutation = (str1 = '', str2 = '') => {
	if (str1 === str2) {
		return true;
	}

	const getObj = (str) => {
		let obj = {};
		for (const le of str) {
			obj[le] = !obj[le] ? 1 : ++obj[le];
		}
		return obj;
	};

	const obj1 = getObj(str1);
	const obj2 = getObj(str2);
	let res = true;

	for (const char in obj1) {
		if (obj1[char] !== obj2[char]) {
			res = false;
		}
	}

	return res;
};

module.exports = {
	stringWithPermutation
}

// console.log(stringWithPermutation('toledo', 'toledox'));