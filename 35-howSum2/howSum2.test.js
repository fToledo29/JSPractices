const { howSum2 } = require("./howSum2");

describe('Testing How Sum 2', () => {
	it('Should return an array', () => {
		expect(Array.isArray(howSum2(2, [1, 1]))).toBe(true);
	});
	it('Should return [ 4, 3 ]', () => {
		const res = howSum2(7, [4, 3]);
		expect(res.length).toBe(2);
		expect(res[0]).toBe(4);
		expect(res[1]).toBe(3);
	});
	it('Should return [ 3, 2, 2 ]', () => {
		const res = howSum2(7, [2, 3]);
		expect(res.length).toBe(3);
		expect(res[0]).toBe(3);
		expect(res[1]).toBe(2);
		expect(res[2]).toBe(2);
	});
	it('Should return null', () => {
		const res = howSum2(7, [2, 4]);
		expect(res).toBeNull();
	});
	it('Should return null', () => {
		const res = howSum2(300, [7, 14]);
		expect(res).toBeNull();
	});
});