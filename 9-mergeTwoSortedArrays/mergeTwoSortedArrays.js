const merge = (arr1, arr2) => {

    let res = [];

    while (arr1.length && arr2.length) {

        const val = (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift();

        res.push(val);

    }

    return res.concat(arr1, arr2);

}

module.exports = {
	merge
}

// console.log(merge([2, 4, 6, 8, 9], [3, 5, 7, 9, 12, 24, 26, 27]));
// console.log(merge([1, 2], [3, 5]));
// console.log(merge([1, 2, 5, 7, 9], [2, 5, 7, 12, 100]));