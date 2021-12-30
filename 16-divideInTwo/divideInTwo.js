
const divideInTwo = (arr = []) => {
	let arrOne = [];
	let arrTwo = [];
	const size = arr.length / 2;
	let copy = [...arr];
	let f = copy.length - 1;
	while (f >= 0) { // O (n)
		const ocurrences = copy.filter(i => i === copy[f]); // O (n)
		if (ocurrences.length > 2) {
			return [];
		}

		if (arrOne.length < size && ocurrences[0]) {
			arrOne.push(ocurrences.pop());

		}

		if (arrTwo.length < size && ocurrences[0]) {
			arrTwo.push(ocurrences.pop());
		}

		copy = copy.filter(i => i !== copy[f]);

		f--;
	}


	return [arrOne, arrTwo];
};

module.exports = {
	divideInTwo,
};
