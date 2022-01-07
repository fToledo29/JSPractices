const { circularPalindromes } = require("./longestPalindrome");

describe('Test Longest Palindrome', () => {
	it('Should return a palindrome', () => {
		const isPalindrome = (s = '') => {
			return s.split('').reverse().join('') === s;
		}
		const string = 'aaabb';
		const res = circularPalindromes(string);
		expect(isPalindrome(res)).toBe(true);
	});

	it('Should return a palindrome', () => {
		const string = 'aaabb';
		const res = circularPalindromes(string);
		expect(res).toBe('ababa');
	});
});