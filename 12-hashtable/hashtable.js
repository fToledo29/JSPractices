class HashTable {
	#bucket = [];
	constructor(size) {
		this.size = size;
		this.#bucket = Array.from({
				length: size
			}, 
			() => new Map());
	}

	#hash(value = '') {
		let hashKey = 0;
		for(let char of value) {
			hashKey += char.charCodeAt(0);
		}

		return hashKey % this.size;
	}

	insert(key, value) {
		const indx = this.#hash(key);
		this.#bucket[indx].set(key, value);
		return this;
	}

	get(key) {
		const indx =  this.#hash(key);
		return this.#bucket[indx].get(key)
	}

	delete(key) {
		const indx =  this.#hash(key);
		const deletedVal = this.#bucket[indx].get(key);
		this.#bucket[indx].delete(key);
		return deletedVal;
	}

	 display() {
		this.#bucket.forEach((values, index) => {
			const entries = values.entries();
			while (!entries.next().done) {
				const [key, value] = values.entries().next().value;
				console.log(`${index}: [ ${key}: ${value} ]`);
			}
		});
	}	
}

module.exports = {
	HashTable
}
// let table = new HashTable(3);
// table.insert('name', 'fernando');
// table.insert('lastName', 'Toledo');
// table.insert('from', 'Mexico');
// console.log(table.display());