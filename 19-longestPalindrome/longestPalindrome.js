
let permutCounter = {};

var longestPalindrome = function (s) {

	let newStr = `#${s.split("").join('#')}#`;;
	let dp = [];
	let friendCenter = 0;
	let friendRadius = 0;
	let lpsCenter = 0;
	let lpsRadius = 0;
	let j;

	for (let i = 0; i < newStr.length; i++) {


		let cenRad = friendCenter + friendRadius;

		if (cenRad > i) {

			j = friendCenter - (i - friendCenter);
			dp[i] = Math.min(dp[j], cenRad - i);
		} else {
			dp[i] = 1;
		}

		while (
			i + dp[i] < newStr.length &&
			i - dp[i] >= 0 &&
			newStr[i + dp[i]] === newStr[i - dp[i]]) {
			dp[i]++;
		}

		if (cenRad < i + dp[i]) {
			friendCenter = i;
			friendRadius = dp[i];
		}
		if (lpsRadius < dp[i]) {
			lpsRadius = dp[i];
			lpsCenter = i;
		}
	}

	let lpsCenMinRad = lpsCenter - lpsRadius + 1;
	let lpsCenPlsRad = (lpsCenter + lpsRadius - 1);

	let res = s.substring(lpsCenMinRad / 2, lpsCenPlsRad / 2);


	return res;
};

const permutator = (inputArr) => {
	let result = [];

	const permute = (arr = [], m = []) => {
		if (arr.length === 0) {
			const string = m.join('');
			if (!permutCounter[string]) {
				result.push(string);
				permutCounter[string] = ++permutCounter[string] || 1;
			}
		} else {
			for (let i = 0; i < arr.length; i++) {
				let curr = arr.slice();
				let next = curr.splice(i, 1);
				let em = m.concat(next);
				let sliced = curr.slice();
				let key = em.join('') + sliced.join();
				if (!permutCounter[key]) {
					permute(sliced, em);
					permutCounter[key] = ++permutCounter[key] || 1;
				}
			}
		}
	}

	permute(inputArr.split(''))

	return result;
}

function circularPalindromes(input) {
	// Write your code here


	let x = 0;
	let longest = '';
	permutCounter = {};

	let sawps = permutator(input);

	while (x < sawps.length) {

		let swap = sawps[x]

		let long = '';

		long = longestPalindrome(swap);

		if (long.length > longest.length) {
			longest = long;
		} else if (long.length === longest.length) {
			if (long.localeCompare(longest) < 0 || longest === '') {
				longest = long;
			}
		}
		x++;
	}

	return longest;

}

module.exports = {
	circularPalindromes
};