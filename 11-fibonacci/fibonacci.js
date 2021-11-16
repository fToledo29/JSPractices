const fibonacci = (num = 0) => {
	if (num === 0 || num === 1) {
		return num;
	}

	return fibonacci(num - 1) + fibonacci(num - 2);

}

module.exports = {
	fibonacci
};