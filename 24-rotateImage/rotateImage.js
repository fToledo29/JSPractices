const rotateImage = a => {
	return a.map((row, rowIndex) => {
		return  a.map(val => val[rowIndex]).reverse();
	});
}

module.exports = rotateImage;

// console.log(solution(	[[10, 9, 6, 3, 7], 
// 			[6, 10, 2, 9, 7], 
// 			[7, 6, 3, 8, 2], 
// 			[8, 9, 7, 9, 9], 
// 			[6, 8, 6, 8, 2]]));