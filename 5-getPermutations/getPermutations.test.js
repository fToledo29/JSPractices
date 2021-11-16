const getPermutations = require('./getPermutations').getPermutations;

describe('Get Permutations', () => {
	it('should get an array of all the permutations', () => {
		expect(getPermutations('abc').length).toBe(6);
		expect(getPermutations('abcd').length).toBe(24);
		expect(getPermutations('fernando').length).toBe(38880);
		expect(getPermutations('pumkin').length).toBe(720);

	});
})
