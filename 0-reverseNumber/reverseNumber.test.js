const reverInt = require('./revertNumber');

test('Returns reverse integer', () => {
  	expect(reverInt(1234)).toBe(4321);
	expect(reverInt(9876)).toBe(6789);
	expect(reverInt(1092)).toBe(2901);
	expect(reverInt(7834)).toBe(4387);
	expect(reverInt(-900)).toBe(-9);
	expect(reverInt(-7)).toBe(-7);

});