const similarArraysIfMax2Swaps = (a = [], b = []) => {
    
    if (a.length !== b.length) {
        return false;
    }
    
    const areSimilar = (ar1 = [], ar2 = []) => {
        let z = 0;
        while (z < ar1.length) {
            if (ar1[z] !== ar2[z]) {
                return false;
            }
            z++;
        }
        return true
    }
    
    if (areSimilar(a, b)) {
        return true;
    }


    let w = 0;
    let aCount = 0;
    let genCount = {};
    let idx = [];
    while(w < a.length) {
        
        if (a[w] !== b[w]) {
            genCount[a[w]] = ++genCount[a[w]] || 1;
            genCount[b[w]] = ++genCount[b[w]] || 1;
            idx.push(w);
            aCount++;
        }

        w++;
    }
    if (aCount <= 2) {
        return (aCount === 0) || genCount[a[idx[0]]] === 2 && genCount[a[idx[1]]] === 2;
    }
    return false;
    
}

module.exports = {
	similarArraysIfMax2Swaps
};