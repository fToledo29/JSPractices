const urlfy = require('./urlfy').urlfy;

describe('Urlfy', () => {
	it('should replace spaces with %20', () => {
		expect(urlfy('Fernando is great')).not.toContain(' ');
		expect(urlfy('there was an space')).not.toContain(' ');
		expect(urlfy('we need nore %20 and less space	')).not.toContain(' ');
		expect(urlfy('Fernando is great')).toContain('%20');
		expect(urlfy('there was an space')).toContain('%20');
		expect(urlfy('we need nore %20 and less space	')).toContain('%20');
	});
});