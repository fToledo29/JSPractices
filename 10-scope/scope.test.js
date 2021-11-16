const { scope } = require("./scope");

describe('Scope test', () => {
	it('should print name from inner function', () => {
		expect(scope.getName()).toBe('My name is ' + scope.name);
	});
	it('should print last name from inner function', () => {
		expect(scope.getLastName()).toBe('My last name is ' + scope.lastName);
	});
	it('should print pet name from inner function', () => {
		expect(scope.getPetName()).toBe("My pet's name is " + scope.pet.name );
	});
	it('should print pet type from inner function', () => {
		expect(scope.getPetType()).toBe('My pet is a ' + scope.pet.type);
	});
});