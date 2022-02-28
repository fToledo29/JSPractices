
const gridTraverse2 = (m, n) => {
	let table = Array.from( {length: m + 1}, () => Array.from({length: n + 1}).fill(0));
	table[1][1] = 1;
	for (let i = 0; i <= m; i++) {
		for (let f = 0; f <= n; f++) {
			if (f + 1 <= n)	table[i][f + 1] += table[i][f];
			if (i + 1 <= m) table[i + 1][f] += table[i][f];
		}
	};
	return table[m][n];
}

module.exports = {
	gridTraverse2
};