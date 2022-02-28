function gridTraverse(height, width, memo = {}) {
    const key = height + '-' + width;
    if (key in memo) return memo[key];
    if (width === 1 && height === 1) return 1;
    if (width === 0 || height === 0) return 0;
    
    memo[key] = gridTraverse(height - 1, width, memo) + 
                gridTraverse(height, width - 1, memo);
    return memo[key];
    
}

module.exports = {
	gridTraverse
};