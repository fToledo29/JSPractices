/**
 * Gets a number and reverse it.
 * @param {number} num Number to be reversed.
 * @returns number reversed.
 */
const reverInt = (num) => {
	if (num < 0) {
		return -1 * parseInt(num.toString().split('').reverse().join(''), 10);
	}
	return parseInt(num.toString().split('').reverse().join(''), 10);
};

module.exports = reverInt;