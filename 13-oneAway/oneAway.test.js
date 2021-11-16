const { oneAway } = require("./oneAway");

describe('One Away to be equal', () => {
	it('should be true', () => {
		expect(oneAway('pale', 'pal')).toBe(true);
	});
	it('should be true', () => {
		expect(oneAway('fernando', 'fernand')).toBe(true);
	});
	it('should be false', () => {
		expect(oneAway('fernando', 'rolando')).toBe(false);
	});
	it('should be true', () => {
		expect(oneAway('ernando', 'fernando')).toBe(true);
	});
});