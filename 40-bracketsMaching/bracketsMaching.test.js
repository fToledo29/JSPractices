
// console.log(bracketMaching('(r(we(w)r)et)'))

const { bracketsMaching } = require("./bracketsMaching");

describe('Testing BracketsMachine', () => {
	it('Should return a boolean', () => {
		expect(typeof bracketsMaching('(r(we(w)r)et)')).toBe('boolean');
	});
	it('Should return true', () => {
		expect(bracketsMaching('(r(we(w)r)et)')).toBe(true);
	});
	it('Should return false', () => {
		expect(bracketsMaching('(r(wew)r)et)')).toBe(false);
	});
	it('Should return false', () => {
		expect(bracketsMaching('(')).toBe(false);
	});
	it('Should return true', () => {
		expect(bracketsMaching('()')).toBe(true);
	});
	it('Should return false', () => {
		expect(bracketsMaching(')')).toBe(false);
	});
});