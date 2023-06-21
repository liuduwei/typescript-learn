"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var strArray = ["1"];
var strArray2 = ["12"];
var promise = new Promise(function (reslove) {
    setTimeout(function () { return reslove("100"); }, 100);
});
promise.then(function (data) {
    data.split("");
});
function merge12(objA, objB) {
    return Object.assign(objA, objB);
}
var A = merge12({ name: "123" }, { age: 3 });
A.age;
function countLetter(element) {
    console.log(element);
}
function extractValue(obj1, key) {
    return obj1[key];
}
extractValue({ name: "dfe" }, "name");
var repo = (function () {
    function repo() {
        this.data = [];
    }
    repo.prototype.addItem = function (item) {
        this.data.push(item);
    };
    repo.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    repo.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return repo;
}());
var objectRepo = new repo();
objectRepo.addItem({ name: "tongtong" });
objectRepo.addItem({ name: "liuduwei" });
objectRepo.removeItem({ name: "tongtong" });
console.log(objectRepo);
var stringRepo = new repo();
stringRepo.addItem("2");
stringRepo.addItem("是");
console.log(stringRepo);
function createCourseGoal(title, description) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    return courseGoal;
}
//# sourceMappingURL=app.js.map