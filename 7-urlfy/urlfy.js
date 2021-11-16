const urlfy = (str = '') => {
	return str.split('').map(s => s === ' ' ? '%20' : s).join('');
}

module.exports = {
	urlfy
};