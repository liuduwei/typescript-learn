"use strict";
const strArray = ["1"];
const strArray2 = ["12"];
const promise = new Promise((reslove) => {
    setTimeout(() => reslove("100"), 100);
});
promise.then((data) => {
    data.split("");
});
function merge12(objA, objB) {
    return Object.assign(objA, objB);
}
const A = merge12({ name: "123" }, { age: 3 });
A.age;
function countLetter(element) {
    console.log(element);
}
function extractValue(obj1, key) {
    return obj1[key];
}
extractValue({ name: "dfe" }, "name");
class repo {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const objectRepo = new repo();
objectRepo.addItem({ name: "tongtong" });
objectRepo.addItem({ name: "liuduwei" });
objectRepo.removeItem({ name: "tongtong" });
console.log(objectRepo);
const stringRepo = new repo();
stringRepo.addItem("2");
stringRepo.addItem("是");
console.log(stringRepo);
function createCourseGoal(title, description) {
    const courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    return courseGoal;
}
//# sourceMappingURL=generics.js.map