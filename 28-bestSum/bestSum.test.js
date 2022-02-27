const { bestSum } = require("./bestSum")

describe('Testing BestSum', () => {
	it('Should return an array', () => {
		expect(Array.isArray(bestSum(2, [1, 1]))).toBe(true);
	});
	it('Should return null', () => {
		expect(bestSum(1, [3, 4])).toBeNull();
	});
	it('Should return [3, 5]', () => {
		const res = bestSum(8, [3, 5]);
		expect(res.length === 2).toBe(true);
		expect(res[0]).toBe(5);
		expect(res[1]).toBe(3);
	});
	it('Should return [7]', () => {
		const res = bestSum(7, [5, 3, 4, 7]);
		expect(res[0]).toBe(7);
		expect(res.length === 1).toBeTruthy();
	});
	it('Should return [25, 25, 25, 25]', () => {
		const res = bestSum(100, [1, 2, 5, 25]);
		expect(res[0]).toBe(25);
		expect(res[1]).toBe(25);
		expect(res[2]).toBe(25);
		expect(res[3]).toBe(25);
		expect(res.length === 4).toBeTruthy();
	});
})