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

const addValueBtn = document.querySelector("#addValueBtn");
addValueBtn.addEventListener("click", () => {
    const keyToAdd = document.querySelector("#keyToAdd").value;
    const valueToAdd = document.querySelector("#valueToAdd").value;
    drink.addValue(keyToAdd, valueToAdd);
    console.log(drink);
});

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {
    drink.reset();
    console.log(drink);
});

const getValueBtn = document.querySelector("#getValueBtn");
getValueBtn.addEventListener("click", () => {
    const keyToGetValue = document.querySelector("#keyToGetValue").value;
    console.log(drink.getValue(keyToGetValue));
});

const deleteBtn = document.querySelector("#deleteBtn");
deleteBtn.addEventListener("click", () => {
    const keyToDelete = document.querySelector("#keyToDelete").value;
    console.log(drink.deleteValue(keyToDelete));
});

const getKeysBtn = document.querySelector("#getKeysBtn");
getKeysBtn.addEventListener("click", () => {
    console.log(drink.getKeys());
});