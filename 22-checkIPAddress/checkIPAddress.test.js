const { checkIPAddress } = require("./checkIPAddress");

describe('Test checkIPAddress', () => {
	it('Should return boolean', () => {
		expect(typeof checkIPAddress('12.12.12')).toBe('boolean');
	});

	it('Should return false', () => {
		expect(checkIPAddress('a1.12.122.122')).toBe(false);
	});

	it('Should return true', () => {
		expect(checkIPAddress('1.255.0.1')).toBe(true);
	});

	it('Should return false', () => {
		expect(checkIPAddress('00.255.0.1')).toBe(false);
	});

	it('Should return true', () => {
		expect(checkIPAddress('0.0.0.1')).toBe(true);
	});

	it('Should return false', () => {
		expect(checkIPAddress('227.222.111.555')).toBe(false);
	});

	it('Should return false', () => {
		expect(checkIPAddress('0.12.122.1a')).toBe(false);
	});
});