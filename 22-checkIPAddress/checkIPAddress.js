const checkIPAddress = (s) => {
    let ar = s.split('.');
    if (ar.length !== 4) {
        return false;
    }
    let x = 0;
    while (x < ar.length) {
         if (!/^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/.test(ar[x])) {
            console.log(ar);
            console.log(ar[x]);
            return false;
        }
         x++;
    }
    return true;
}

module.exports = {
	checkIPAddress
}