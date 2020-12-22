class Storage {
    constructor() {
        this.drinkStorage = {};
    }

    addValue(key, value) {
        this.drinkStorage[key] = value;
    }
    getValue(key) {
        return key in this.drinkStorage ? this.drinkStorage[key] : false;
    }
    getKeys() {
        return Object.keys(this.drinkStorage);
    }
    deleteValue(key) {
        return key in this.drinkStorage ? delete this.drinkStorage[key] : false;
    }
    reset() {
        for (let key in this.drinkStorage) {
            delete this.drinkStorage[key];
        }
    }
}

const drink = new Storage();
drink.addValue("wf", "qwerty");
drink.addValue("qwe", "qwe");
console.log(drink);
console.log(drink.getValue("wfe"));
console.log(drink.getKeys());
drink.reset();
console.log(drink);