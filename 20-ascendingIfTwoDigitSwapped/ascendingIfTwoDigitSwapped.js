const ascendingIfTwoDigitSwapped = (numbers = []) => {
    let strNums = [...numbers];
    let i = 0;
    
    const isAscending = (arr = []) => {
        return arr.every((v, i, a) => {
            return i === 0 || v > a[i - 1];
        });
    }
    
    const swap = (num = [], from = 0, to = 0) => {
        const temp = num[from];
        num[from] = num[to];
        num[to] = temp;
        return parseInt(num.join(''));
    }
    

    
    if (isAscending(numbers)) {
        return true;
    }
    
    while (i < numbers.length) {
            
            let z = 0;
            let w = (strNums[i] + '').length - 1;
            while (z < w) {
                strNums[i] = swap((strNums[i] + '').split(''), z, w);
                if (isAscending(strNums)) {
                    return true;
                }
                strNums = [...numbers];
                z++;
                w--;
            }

        i++;
    }
    return false;
}

module.exports = {
	ascendingIfTwoDigitSwapped
}


// console.log(solution([1, 3, 900, 10]));
// console.log(solution([13, 31, 30]));
// console.log(solution([1, 5, 10, 20]));