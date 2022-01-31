const stringsRearrangement = (inputArray) => {


	const checkStr = (str1, str2) => {
		if (str1 == str2) {
			return false;
		}
		let count = 0;
		let z = 0;
		while (z < str1.length) {
			if (str1[z] !== str2[z]) {
				if (count >= 1) {
					return false;
				}
				count++;
			}
			z++;;
		}
		return true;
	}

	const checkDifference = (strArr) => {
		let z = 1;
		while (z < strArr.length) {
			if (!checkStr(strArr[z - 1], strArr[z])) {
				return false;
			}
			z++;
		}
		return true;
	}

	let checkPassed = false;

	const permute = (arr = [], m = []) => {
		if (arr.length === 0) {
			if (checkDifference(m)) {
				checkPassed = true;
			}
		} else {
			let i = 0;
			while (i < arr.length) {
				let curr = [...arr];
				let em = [...m, ...curr.splice(i, 1)];
				permute([...curr], em);
				i++;
			}
		}
	}

	permute(inputArray)

	return checkPassed;
}

module.exports = {
	stringsRearrangement
}