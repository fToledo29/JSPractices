const rotateImage = require("./rotateImage");


describe('Testint Rotate Image', () => {
	it('Should return an array', () => {
		const arr = [
			[ 6, 8, 7 ],
			[ 8, 9, 6 ],
			[ 6, 7, 3]
		];
		expect(Array.isArray(rotateImage(arr))).toBe(true);
	});

	it('Should return an array', () => {
		const arraysMatch = (a, b) => {
			if (a.length !== b.length) return false;
			for (let i = 0; i < a.length; i++) {
				for (let f = 0; f < a[i].length; f++) {
					if (a[i][f] !== b[i][f]) {
						return false;
					}
				}
			}
			return true;
		};
		const res = [
			[ 6, 8, 7, 6, 10 ],
			[ 8, 9, 6, 10, 9 ],
			[ 6, 7, 3, 2, 6 ],
			[ 8, 9, 8, 9, 3 ],
			[ 2, 9, 2, 7, 7 ],
			[ 20, 90, 20, 70, 20 ]
		]
		const arr = [
			[10, 9, 6, 3, 7], 
			[6, 10, 2, 9, 7], 
			[7, 6, 3, 8, 2], 
			[8, 9, 7, 9, 9], 
			[6, 8, 6, 8, 2]
		];
		expect(arraysMatch(rotateImage(arr), res)).toBe(false);
	});

	it('Should return an array', () => {
		const arraysMatch = (a, b) => {
			if (a.length !== b.length) return false;
			for (let i = 0; i < a.length; i++) {
				for (let f = 0; f < a[i].length; f++) {
					if (a[i][f] !== b[i][f]) {
						return false;
					}
				}
			}
			return true;
		};
		const res = [
			[ 6, 8, 7, 6, 10 ],
			[ 8, 9, 6, 10, 9 ],
			[ 6, 7, 3, 2, 6 ],
			[ 8, 9, 8, 9, 3 ],
			[ 2, 9, 2, 7, 7 ]
		]
		const arr = [
			[10, 9, 6, 3, 7], 
			[6, 10, 2, 9, 7], 
			[7, 6, 3, 8, 2], 
			[8, 9, 7, 9, 9], 
			[6, 8, 6, 8, 2]
		];
		expect(arraysMatch(rotateImage(arr), res)).toBe(true);
	});
});