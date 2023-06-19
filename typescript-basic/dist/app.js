"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Living = (function () {
    function Living(is_live, Species) {
        this.is_live = is_live;
        this.Species = Species;
    }
    Living.prototype.fn = function () {
        return 1;
    };
    return Living;
}());
var Person = (function (_super) {
    __extends(Person, _super);
    function Person(name, age, gender) {
        var _this = this;
        Person.profile = "dfe";
        _this = _super.call(this, true, "people") || this;
        _this.name = name;
        _this.age = age;
        _this._gender = gender;
        return _this;
    }
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.getInstance = function (name, age, gender) {
        if (this.instance) {
            return this.instance;
        }
        Person.instance = new Person(name, age, gender);
        return this.instance;
    };
    Person.prototype.fn2 = function () {
        return "cao";
    };
    Object.defineProperty(Person.prototype, "getGender", {
        get: function () {
            if (this.gender) {
                return this.gender;
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.changeName = function (name) {
    };
    return Person;
}(Living));
var liu = Person.getInstance("liuduwei", 21, "male");
var tong = Person.getInstance("tongqing", 22, "female");
console.log(liu);
console.log(tong);
//# sourceMappingURL=app.js.map