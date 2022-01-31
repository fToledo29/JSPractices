const { stringsRearrangement } = require("./stringsRearrangement");

describe('Testing stringsRearrangement', () => {
	it('Should be an boolean', () => {
		expect(typeof stringsRearrangement(['c'])).toBe('boolean');
	});

	it('Should be an false', () => {
		expect(stringsRearrangement(['c', 'c'])).toBe(false);
	});

	it('Should be an true', () => {
		expect(stringsRearrangement(['a', 'b'])).toBe(true);
	});

	it('Should be an true', () => {
		expect(stringsRearrangement(['ca', 'cc', 'cb'])).toBe(true);
	});

 	it('Should be an true', () => {
		expect(stringsRearrangement(["zzzzab", "zzzzbb", "zzzzaa"])).toBe(true);
	});
 	it('Should be an false', () => {
		expect(stringsRearrangement(["ab", "ad", "ef", "eg"])).toBe(false);
	});
});