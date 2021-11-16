const { HashTable } = require("./hashtable");

describe('Hash Table', () => {
	it('should instantiate a Hash Table', () => {
		expect((new HashTable(1)).size).toBe(1);
	});
	it('should set and get key and value', () => {
		let table = new HashTable(1);
		table.insert('name', 'fernando');
		expect(table.get('name')).toBe('fernando');
	});
	it('should delete inserted value', () => {
		let table = new HashTable(2);
		table.insert('name', 'fernando');
		table.insert('city', 'Monterrey');
		expect(table.delete('city')).toBe('Monterrey');
		expect(table.size).toBe(2);
		expect(table.get('city')).not.toBeDefined();
	});
	it('should not collapse', () => {
		let table = new HashTable(2);
		table.insert('Spain', 'toledo');
		table.insert('ǻ', 'catalunia');
		expect(table.get('Spain')).toBe('toledo');
		expect(table.get('ǻ')).toBe('catalunia');
	});
	it('should print values', () => {
		let table = new HashTable(2);
		table.insert('name', 'Fernando');
		table.insert('lastname', 'Toledo');
		console.log = jest.spyOn(console, "log");
		table.display();
		expect(console.log).toHaveBeenCalledTimes(2);
	});

});