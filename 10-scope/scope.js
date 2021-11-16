const scope = {
	name: 'Fernando',
	lastName: 'Toledo',
	pet: {
		type: 'Cat',
		name: 'Panfilo'
	},
	getName: function() {
		function printName() {
			return 'My name is ' + this.name;
		}
		return printName.call(this);
	},
	getLastName: function() {
		function printLastName() {
			return 'My last name is ' + this.lastName;
		}
		return printLastName.bind(this)();
	},
	getPetName: function() {
		const self = this;
		function printPetName() {
			return "My pet's name is " + self.pet.name;
		}

		return printPetName();
	},
	getPetType: function() {
		const printPetType = () => {
			return 'My pet is a ' + this.pet.type;
		}

		return printPetType();
	}

}

module.exports = {
	scope
};