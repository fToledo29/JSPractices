const { similarArraysIfMax2Swaps } = require("./similarArraysIfMax2Swaps");

describe('Test similarArraysIfMax2Swaps', () => {
	it('Should return boolean', () => {
		expect(typeof similarArraysIfMax2Swaps([4], [2])).toBe('boolean');
	});

	it('Should return true', () => {
		expect(similarArraysIfMax2Swaps([4], [4])).toBe(true);
	});

	it('Should return true', () => {
		expect(similarArraysIfMax2Swaps([1, 2, 3, 4, 5], [4, 2, 3, 1, 5])).toBe(true);
	});

	it('Should return false', () => {
		const arr1 = [832, 998, 148, 570, 533, 561, 455, 147, 894, 279, 999, 999, 1000, 343, 999, 23, 1, 233, 1, 111, 11];
		const arr2 = [1, 998, 148, 570, 533, 561, 455, 147, 894, 279, 999, 999, 1000, 343, 999, 23, 1, 233, 11, 111, 11];
		expect(similarArraysIfMax2Swaps(arr1, arr2)).toBe(false);
	});

	it('Should return true', () => {
		const arr1 = [1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1];
		const arr2 = [1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1, 1, ,1, 1, 1, 1];
		expect(similarArraysIfMax2Swaps(arr1, arr2)).toBe(true);
	});
	it('Should return false', () => {
		const arr1 = [3];
		const arr2 = [1, 1];
		expect(similarArraysIfMax2Swaps(arr1, arr2)).toBe(false);
	});

});