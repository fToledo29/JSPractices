const bracketsMaching = (str) => {
    let open = [];
    let i = 0;
    while (i < str.length) {
        if (str[i] === '(') {
            open.push(str[i]);            
        } 
        if (str[i] === ')' && open.length > 0) {
            open.pop();
        } else if (str[i] === ')' && open.length == 0) {
		return false;
	}
        
        i++;
    }
    return open.length === 0;
}

module.exports = {
	bracketsMaching
};