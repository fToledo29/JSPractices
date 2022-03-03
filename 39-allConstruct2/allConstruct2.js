const allConstruct2 = (target, words) => {
	let arr = Array.from({length: target.length + 1}, () => []);

	arr[0]= [[]];

	for (let i = 0; i <= target.length; i++) {
		for (const word of words) {
			if (target.slice(i, i + word.length) === word) {
				const combinations = arr[i].map(sub => [...sub, word]);
				arr[i + word.length].push(...combinations) ;
			}
		}
 

	}
	return arr[target.length];
};

module.exports = {
	allConstruct2
};