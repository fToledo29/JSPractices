const getObj = (str) => {
	let obj = {};
	for (let k of str) {
		obj[k] = obj[k] + 1 || 1;
	}
	return obj;
}
const oneAway = (str1 = '', str2 = '') => {
	if (str1 === str2) {
		return false;
	}
	const obj1 = getObj(str1);
	const obj2 = getObj(str2);
	let count = 0;
	for(let k in obj1) {
		if (obj1[k] !== obj2[k]) {
			count++;
		}
		if (count > 1) {
			return false;
		} 
	}
	return true;
}

module.exports = {
	oneAway
};