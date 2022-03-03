const { allConstruct2 } = require("./allConstruct2");


describe('Testing AllConstruct', () => {
	it('Should return 2D array', () => {
		expect(Array.isArray(allConstruct2('', ['a', 'b']))).toBe(true);
		expect(Array.isArray(allConstruct2('', ['a', 'b'])[0])).toBe(true);
	});
	it('Should return [ [ "ab", "c" ] ]', () => {
		const res = allConstruct2('abc', ['ab', 'c']);
		expect(res.length).toBe(1);
		expect(res[0].length).toBe(2);
		expect(res[0][0]).toBe('ab');
		expect(res[0][1]).toBe('c');
	});
	it("Should return [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]", () => {
		const res = allConstruct2('purple', ['purp', 'p', 'ur', 'le', 'purpl']);
		expect(res.length).toBe(2);
		expect(res[0].length).toBe(2);
		expect(res[0][0]).toBe('purp');
		expect(res[0][1]).toBe('le');
		expect(res[1].length).toBe(4);
		expect(res[1][0]).toBe('p');
		expect(res[1][1]).toBe('ur');
		expect(res[1][2]).toBe('p');
		expect(res[1][3]).toBe('le');
	});
	it('Should return [[]]', () => {
		const res = allConstruct2('', ['a', 'c']);
		expect(res.length).toBe(1);
		expect(res[0].length).toBe(0);
	});
	it('Should return []', () => {
		const res = allConstruct2('aaaaaaaaaaaaaabc', ['aa', 'a', 'aaa', 'aa', 'aaaa']);
		expect(res.length).toBe(0);
	});
});