"use strict";
class Living {
    constructor(is_live, Species) {
        this.is_live = is_live;
        this.Species = Species;
    }
    fn() {
        return 1;
    }
}
class Person extends Living {
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    constructor(name, age, gender) {
        Person.profile = "dfe";
        super(true, "people");
        this.name = name;
        this.age = age;
        this._gender = gender;
    }
    static getInstance(name, age, gender) {
        if (this.instance) {
            return Person.instance;
        }
        Person.instance = new Person(name, age, gender);
        return Person.instance;
    }
    fn2() {
        return "cao";
    }
    get getGender() {
        if (this.gender) {
            return this.gender;
        }
    }
    changeName(name) {
    }
}
const liu = Person.getInstance("liuduwei", 21, "male");
const tong = Person.getInstance("tongqing", 22, "female");
console.log(liu);
console.log(tong);
class Computer {
    constructor() {
        this.brand = "dfe";
        this.model = "dfe";
        this.warranty = 12;
    }
    oprate() {
        throw new Error("Method not implemented.");
    }
    startUp() { }
}
let macbook;
macbook = {
    brand: "apple",
    model: "macbook",
    warranty: 3,
    startUp() {
        console.log("start up complete");
    },
    oprate() { },
};
class Personalcomputer {
    constructor() {
        this.brand = "dfe";
        this.model = "dfe";
        this.warranty = 3;
    }
    startUp() {
        throw new Error("Method not implemented.");
    }
    oprate() { }
    typing() {
        console.log("dfe");
    }
}
//# sourceMappingURL=oop.js.map