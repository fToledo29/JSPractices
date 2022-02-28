const { gridTraverse2 } = require("./gridTraverse2");

describe('Testing Grid Traverse', () => {
	it('Should return a number', () => {
		expect(typeof gridTraverse2(2, 4)).toBe('number');
	});
	it('Should return 1', () => {
		expect(gridTraverse2(1, 1)).toBe(1);
	});
	it('Should return 3', () => {
		expect(gridTraverse2(2, 3)).toBe(3);
	});
	it('Should return 6', () => {
		expect(gridTraverse2(3, 3)).toBe(6);
	});
	it('Should return 2333606220', () => {
		expect(gridTraverse2(18, 18)).toBe(2333606220);
	});

});