
/**
 * 
 * @param {Array} array Array to be splited.
 * @param {number} num number of elementes on each chunk.
 * @returns Array with chunks sized by the given number.
 */
const chunkArrays = (array = [], num = 0) => {

	const chunks = [];
	for (let i = 0; i < array.length; i += num) {
		chunks.push(array.slice(i, num + i));
	}

	return chunks;
}

module.exports = {
	chunkArrays
}

// console.log(chunkArrays([1, 2, 3, 5, 6, 7, 8, 9, 10, 11], 3));
