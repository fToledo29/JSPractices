const { palindromePermutations } = require("./palindromePermutation")

describe('Palindrome and Permutations', () => {
	it('should validate if a string can ve a palindrome', () => {
		expect(palindromePermutations('fernando')).toBe(false);
		expect(palindromePermutations('taco cat')).toBe(true);
		expect(palindromePermutations('aabbc')).toBe(true);
		expect(palindromePermutations(' rac ecar rara ')).toBe(true);
	});
});