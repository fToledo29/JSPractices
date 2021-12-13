class Animal {
	constructor(type = '', color = '') {
		this.color = color;
		this.type = type;
		this.energy = 0;
		this.foodLevel = 0
		this.minEnergy = 0;
		this.minHungry = 0;
	}

	goToSleep() {
		return this.type + ' is sleeping!';
	}

	makeANoise() {
		return 'Hmmm!';
	}

	play() {
		this.energy = this.energy - 5;
		this.foodLevel = this.foodLevel - 5;
	}

	feed() {
		this.energy = this.energy + 5;
		this.foodLevel = this.foodLevel + 5;
	}

	isHungry() {
		return this.foodLevel < this.minHungry ? this.type + ' ' + this.makeANoise() : "";
	}

	isTired() {
		return this.energy < this.minEnergy ? this.goToSleep() : this.type + this.makeANoise();
	}


}

class Dog extends Animal {
	constructor(color = ''){
		super('Dog', color);
		this.energy = 50;
		this.foodLevel = 60;
		this.minEnergy = 40;
		this.minHungry = 30;
	}

	makeANoise() {
		return 'Woof!';
	}
}

class Cat extends Animal {
	constructor(color = '') {
		super('Cat', color);
		this.energy = 50;
		this.foodLevel = 50;
		this.minEnergy = 60;
		this.minHungry = 40;
	}

	makeANoise() {
		return 'Meow!';
	}
}

module.exports = {
	Animal,
	Dog,
	Cat,
};