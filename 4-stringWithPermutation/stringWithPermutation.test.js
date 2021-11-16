const stringWithPermutation = require('./stringWithPermutation').stringWithPermutation;

describe('String With permutations', () => {
	it('should validate if a string is a permutation of another string', () => {
		expect(stringWithPermutation('fernando', 'prakash')).toBe(false);
		expect(stringWithPermutation('fernando', 'nandofer')).toBe(true);
		expect(stringWithPermutation('fernando', 'fernando is great')).toBe(false);
		expect(stringWithPermutation('pumkin', 'spumkind')).toBe(true);
		expect(stringWithPermutation('retro', 'orter')).toBe(true);
		expect(stringWithPermutation('otherotter', 'is otter other animal')).toBe(true);
	});	
});

