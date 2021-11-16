
/**
 * Return 'fizz' for multiples of 3 'buzz' for multiples of 5 and 
 * 'fizzbuzz' for multiples of 3 and 5
 * @param {number} num Number to be validated
 * @returns string | number
 */
const fizzbuzz = (num) => {
	if (num % 3 === 0 && num % 5 === 0) {
		return 'fizzbuzz';
	} else if (num % 3 === 0) {
		return 'fizz';
	} else if (num % 5 === 0) {
		return 'buzz';
	}
	return num;
}

const printFizzBuzz = (num) => {
	for (let i = 1; i <= num; i++) {
		console.log(fizzbuzz(i));
	}
}

module.exports = {
	fizzbuzz,
	printFizzBuzz
};