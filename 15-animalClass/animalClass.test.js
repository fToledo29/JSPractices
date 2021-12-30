const { Animal, Dog, Cat } = require("./animalClass");

describe('Create Animal Class', () => {
	it('Should create an instance of animal class', () => {
		const cat = new Animal();
		expect(cat).toBeInstanceOf(Animal);
	});
	it('Should have type, and color properties', () => {
		const dog = new Animal();
		expect(dog.type).toBeDefined();
		expect(dog.color).toBeDefined();
	});
	it('Should be animal type dog, and red color', () => {
		const dog = new Animal('Dog', 'Red');
		expect(dog.type).toBe('Dog');
		expect(dog.color).toBe('Red');
	});
	it('Should dog have Animal properties', () => {
		const dog = new Dog('Green');
		expect(dog.type).toBe('Dog');
		expect(dog.color).toBe('Green');
	});
	it('Should Cat say meow and dog woof', () => {
		const dog = new Dog('Black');
		const cat = new Cat('White');
		expect(dog.makeANoise()).toBe('Woof!');
		expect(cat.makeANoise()).toBe('Meow!');
	});
	it('Should Cat and Dog go to sleep', () => {
		const dog = new Dog('Black');
		const cat = new Cat('White');
		expect(dog.goToSleep()).toBe('Dog is sleeping!');
		expect(cat.goToSleep()).toBe('Cat is sleeping!');
	});
	it("Should dog be hungry and make a noise", () => {
		const dog = new Dog('Red');
		expect(dog.foodLevel >  dog.minHungry).toBeTruthy();
		expect(dog.foodLevel).toBe(60);
		dog.play();
		dog.play();
		dog.play();
		dog.play();
		dog.play();
		dog.play();
		dog.play();
		expect(dog.foodLevel < dog.minHungry).toBeTruthy();
		expect(dog.isHungry()).toBe(dog.type + ' ' + dog.makeANoise());
	});
	it("Should Cat be hungry and make a noise", () => {
		const cat = new Cat('Red');
		expect(cat.foodLevel >  cat.minHungry).toBeTruthy();
		expect(cat.foodLevel).toBe(50);
		cat.play();
		cat.play();
		cat.play();
		cat.play();
		cat.play();
		expect(cat.foodLevel < cat.minHungry).toBeTruthy();
		expect(cat.isHungry()).toBe(cat.type + ' ' + cat.makeANoise());
	});
	it("Should dog be tired", () => {
		const dog = new Dog('Red');
		expect(dog.foodLevel >  dog.minHungry).toBeTruthy();
		expect(dog.foodLevel).toBe(60);
		dog.play();
		dog.play();
		dog.play();
		dog.play();
		dog.play();
		dog.play();
		dog.play();
		expect(dog.foodLevel < dog.minHungry).toBeTruthy();
		expect(dog.energy < dog.minEnergy).toBeTruthy();
	});
});