const { fibonacci } = require("./fibonacci");

describe('Fibonacci', () => {
	it('should return 0', () => {
		expect(fibonacci(0)).toBe(0);
	});
	it('should return 1', () => {
		expect(fibonacci(1)).toBe(1);
	});
	it('should return 1', () => {
		expect(fibonacci(2)).toBe(1);
	});
	it('should return 3', () => {
		expect(fibonacci(3)).toBe(2);
	});
	it('should return 3', () => {
		expect(fibonacci(4)).toBe(3);
	});
	it('should return 5', () => {
		expect(fibonacci(5)).toBe(5);
	});
	it('should return 8', () => {
		expect(fibonacci(6)).toBe(8);
	});
	it('should return 144', () => {
		expect(fibonacci(12)).toBe(144);
	});
	it('should return 1597', () => {
		expect(fibonacci(17)).toBe(1597);
	});
});