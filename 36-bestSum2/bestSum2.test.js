const { bestSum2 } = require("./bestSum2");

describe('Testing Best Sum 2', () => {
	it('Should return an array', () => {
		expect(Array.isArray(bestSum2(2, [1, 1]))).toBe(true);
	});
	it('Should return [3, 5]', () => {
		const res =  bestSum2(8, [2, 3, 5]);
		expect(res.length).toBe(2);
		expect(res[0]).toBe(3);
		expect(res[1]).toBe(5);
	});
	it('Should return [8]', () => {
		const res =  bestSum2(8, [2, 3, 5, 8]);
		expect(res.length).toBe(1);
		expect(res[0]).toBe(8);
	});
	it('Should return [7]', () => {
		const res =  bestSum2(7, [5, 3, 4, 7]);
		expect(res.length).toBe(1);
		expect(res[0]).toBe(7);
	});
	it('Should return [7]', () => {
		const res =  bestSum2(8, [1, 4, 5]);
		expect(res.length).toBe(2);
		expect(res[0]).toBe(4);
		expect(res[1]).toBe(4);
	});
	it('Should return [25, 25, 25]', () => {
		const res =  bestSum2(100, [1, 2, 25]);
		expect(res.length).toBe(4);
		expect(res[0]).toBe(25);
		expect(res[1]).toBe(25);
		expect(res[2]).toBe(25);
		expect(res[3]).toBe(25);
	});
});