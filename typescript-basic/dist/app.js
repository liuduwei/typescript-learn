"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(info) {
    console.log(info);
    return function Logger1(constructor) {
        console.log(constructor);
    };
}
function LogProperty(target, propertyName) {
    console.log("target", target);
    console.log("prop", propertyName);
}
function LogFunction(target, name, descriptor) {
    console.log("target", target);
    console.log("prop", name);
    console.log("des", descriptor);
}
function LogParameter(target, name, position) {
    console.log(target);
    console.log(name);
    console.log(position);
}
function AddTemplate(template, selector) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log(_);
                console.log("rendering templete");
                const el = document.querySelector(selector);
                if (el) {
                    el.innerHTML = this.name;
                }
            }
        };
    };
}
let Personn = class Personn {
    set setName(name) {
        this.name = name;
    }
    constructor() {
        this.name = "max";
        this.name2 = "max";
        this.name3 = "max";
    }
};
__decorate([
    LogProperty
], Personn.prototype, "name", void 0);
__decorate([
    LogProperty
], Personn.prototype, "name2", void 0);
__decorate([
    LogFunction,
    __param(0, LogParameter)
], Personn.prototype, "setName", null);
Personn = __decorate([
    AddTemplate("caonima", "h1")
], Personn);
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "caonima";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const btn = document.querySelector("button");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", p.showMessage);
const registerValidate = {};
function Required(target, name) {
    registerValidate[target.constructor.name] = Object.assign(Object.assign({}, registerValidate[target.constructor.name]), { name: ["required"] });
}
function Positive(target, name) {
    registerValidate[target.constructor.name] = Object.assign(Object.assign({}, registerValidate[target.constructor.name]), { name: ["positive"] });
}
function validator(name) {
    if (registerValidate[name]) {
        return;
    }
}
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "name", void 0);
__decorate([
    Positive
], Course.prototype, "price", void 0);
const formEl = document.querySelector("form");
formEl === null || formEl === void 0 ? void 0 : formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const price = formData.get("price");
    const createCourse = new Course(name, price);
    console.log(createCourse);
});
//# sourceMappingURL=app.js.map