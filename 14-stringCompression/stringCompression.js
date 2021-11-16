const stringCompression = (str = '') => {
	let res = '';
	let count = 1;
	let uniqueCount = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			count++;
		} else {
			res += str[i] + count;
			count = 1;
			uniqueCount++;
		}	
	}
	return uniqueCount === str.length ? str : res;
};

module.exports = {
	stringCompression
};

// console.log(stringCompression('Fernando'));