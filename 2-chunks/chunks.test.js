const chunkArrays = require('./chunks').chunkArrays;

describe('Array Chunks', () => {
  
	it('should get chunks from array', () => {
		expect(chunkArrays([1, 2], 2).length).toBe(1);
		expect(chunkArrays([1, 2, 4], 2)[1][0]).toBe(4);
		expect(chunkArrays([1, 2, 3, 5, 6, 7, 3, 6, 8, 6], 3)[1][0]).toBe(5);
		expect(chunkArrays([1, 2, "fer", 'nando', 'toledo'], 5)[0][4]).toBe('toledo');
	});

})


