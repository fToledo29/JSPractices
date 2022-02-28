const allConstruct = (target, words, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return [[]];

	let all = [];
	for (const word of words) {
		if (target.indexOf(word) === 0) {
			const sufix = target.slice(word.length);
			const res = allConstruct(sufix, words, memo);
			all.push(...res.map(way => [word].concat(way)));
		}
 

	}
	memo[target] = all;
	return all;
};

module.exports = {
	allConstruct
};