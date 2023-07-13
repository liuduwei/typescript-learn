/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst project_input_1 = __importDefault(__webpack_require__(/*! ./components/project-input */ \"./src/components/project-input.ts\"));\nconst project_list_1 = __importDefault(__webpack_require__(/*! ./components/project-list */ \"./src/components/project-list.ts\"));\nnew project_input_1.default();\nnew project_list_1.default(\"active\");\nnew project_list_1.default(\"finished\");\n\n\n//# sourceURL=webpack://understanding-typescript/./src/app.ts?");

/***/ }),

/***/ "./src/components/base-components.ts":
/*!*******************************************!*\
  !*** ./src/components/base-components.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Component {\n    constructor(templeteId, hostId, insertAtBeginning, elementId) {\n        this.templete = document.getElementById(templeteId);\n        this.hostElement = document.getElementById(hostId);\n        const importNode = document.importNode(this.templete.content, true);\n        this.element = importNode.firstElementChild;\n        if (elementId) {\n            this.element.id = elementId;\n        }\n        this.attach(insertAtBeginning);\n    }\n    attach(insertAtBeginning) {\n        this.hostElement.insertAdjacentElement(insertAtBeginning ? \"afterbegin\" : \"beforeend\", this.element);\n    }\n}\nexports[\"default\"] = Component;\n\n\n//# sourceURL=webpack://understanding-typescript/./src/components/base-components.ts?");

/***/ }),

/***/ "./src/components/project-input.ts":
/*!*****************************************!*\
  !*** ./src/components/project-input.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst autobind_1 = __importDefault(__webpack_require__(/*! ../decorators/autobind */ \"./src/decorators/autobind.ts\"));\nconst project_state_1 = __importDefault(__webpack_require__(/*! ../state/project-state */ \"./src/state/project-state.ts\"));\nconst validation_1 = __webpack_require__(/*! ../util/validation */ \"./src/util/validation.ts\");\nconst base_components_1 = __importDefault(__webpack_require__(/*! ./base-components */ \"./src/components/base-components.ts\"));\nclass ProjectInput extends base_components_1.default {\n    constructor() {\n        super(\"project-input\", \"app\", false, \"user-input\");\n        this.titleInput = this.element.querySelector(\"#title\");\n        this.descriptionInput = (this.element.querySelector(\"#description\"));\n        this.peopleInput = this.element.querySelector(\"#people\");\n        this.configure();\n    }\n    gatherUserInput() {\n        const enterTitle = this.titleInput.value;\n        const enterDescription = this.descriptionInput.value;\n        const enterPeople = this.peopleInput.value;\n        if ((0, validation_1.validate)({ value: enterTitle, required: true, minLength: 3 }) ||\n            (0, validation_1.validate)({ value: enterDescription, required: true, minLength: 3 }) ||\n            (0, validation_1.validate)({ value: enterPeople, required: true, min: 8 })) {\n            return [enterTitle, enterDescription, +enterPeople];\n        }\n        else {\n            alert(\"input valid please try again\");\n            return;\n        }\n    }\n    submitHandler(e) {\n        e.preventDefault();\n        const userInput = this.gatherUserInput();\n        if (Array.isArray(userInput)) {\n            const [title, desc, people] = userInput;\n            project_state_1.default.addProject(title, desc, people, \"active\");\n            this.clearInput();\n        }\n    }\n    clearInput() {\n        this.titleInput.value = \"\";\n        this.descriptionInput.value = \"\";\n        this.peopleInput.value = \"\";\n    }\n    configure() {\n        this.element.addEventListener(\"submit\", this.submitHandler);\n    }\n    renderContent() { }\n}\nexports[\"default\"] = ProjectInput;\n__decorate([\n    autobind_1.default\n], ProjectInput.prototype, \"submitHandler\", null);\n\n\n//# sourceURL=webpack://understanding-typescript/./src/components/project-input.ts?");

/***/ }),

/***/ "./src/components/project-item.ts":
/*!****************************************!*\
  !*** ./src/components/project-item.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst autobind_1 = __importDefault(__webpack_require__(/*! ../decorators/autobind */ \"./src/decorators/autobind.ts\"));\nconst base_components_1 = __importDefault(__webpack_require__(/*! ./base-components */ \"./src/components/base-components.ts\"));\nclass ProjectItem extends base_components_1.default {\n    constructor(project, type) {\n        super(\"single-project\", `${type}-projects-list`, false, project.id);\n        this.project = project;\n        this.configure();\n        this.renderContent();\n    }\n    dragStartHandler(e) {\n        e.dataTransfer.setData(\"text/plain\", this.project.id);\n        e.dataTransfer.effectAllowed = \"move\";\n    }\n    dragEndHandler(_) {\n    }\n    get person() {\n        return this.project.people === 1\n            ? \"1 person assigned\"\n            : `${this.project.people} persons assigned`;\n    }\n    configure() {\n        this.element.addEventListener(\"dragstart\", this.dragStartHandler);\n        this.element.addEventListener(\"dragend\", this.dragEndHandler);\n    }\n    renderContent() {\n        this.element.querySelector(\"h2\").textContent = this.project.title;\n        this.element.querySelector(\"h3\").textContent = this.person;\n        this.element.querySelector(\"p\").textContent = this.project.description;\n    }\n}\nexports[\"default\"] = ProjectItem;\n__decorate([\n    autobind_1.default\n], ProjectItem.prototype, \"dragStartHandler\", null);\n__decorate([\n    autobind_1.default\n], ProjectItem.prototype, \"dragEndHandler\", null);\n\n\n//# sourceURL=webpack://understanding-typescript/./src/components/project-item.ts?");

/***/ }),

/***/ "./src/components/project-list.ts":
/*!****************************************!*\
  !*** ./src/components/project-list.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst autobind_1 = __importDefault(__webpack_require__(/*! ../decorators/autobind */ \"./src/decorators/autobind.ts\"));\nconst project_1 = __webpack_require__(/*! ../models/project */ \"./src/models/project.ts\");\nconst project_state_1 = __importDefault(__webpack_require__(/*! ../state/project-state */ \"./src/state/project-state.ts\"));\nconst base_components_1 = __importDefault(__webpack_require__(/*! ./base-components */ \"./src/components/base-components.ts\"));\nconst project_item_1 = __importDefault(__webpack_require__(/*! ./project-item */ \"./src/components/project-item.ts\"));\nclass ProjectList extends base_components_1.default {\n    constructor(type) {\n        super(\"project-list\", \"app\", false, `${type}-projects`);\n        this.assignedProjects = [];\n        this.type = type;\n        this.configure();\n        this.renderContent();\n    }\n    dragLeaveHandler(_) {\n        this.element.querySelector(\"ul\").classList.remove(\"droppable\");\n    }\n    dragOverHandler(e) {\n        if (e.dataTransfer && e.dataTransfer.types[0] === \"text/plain\") {\n            e.preventDefault();\n            this.element.querySelector(\"ul\").classList.add(\"droppable\");\n        }\n    }\n    dropHandler(e) {\n        const id = e.dataTransfer.getData(\"text/plain\");\n        this.element.querySelector(\"ul\").classList.remove(\"droppable\");\n        project_state_1.default.moveProject(id, this.type === \"active\" ? \"active\" : \"finished\");\n    }\n    renderProjects() {\n        const listEL = (document.querySelector(`#${this.type}-projects-list`));\n        listEL.innerHTML = \"\";\n        for (const project of this.assignedProjects) {\n            new project_item_1.default(project, this.type);\n        }\n    }\n    configure() {\n        this.element.addEventListener(\"dragleave\", this.dragLeaveHandler);\n        this.element.addEventListener(\"dragover\", this.dragOverHandler);\n        this.element.addEventListener(\"drop\", this.dropHandler);\n        project_state_1.default.addListener((projects) => {\n            this.assignedProjects = projects.filter((prj) => project_1.projectStatus[prj.status] === this.type);\n            this.renderProjects();\n        });\n    }\n    renderContent() {\n        const listId = `${this.type}-projects-list`;\n        this.element.querySelector(\"ul\").id = listId;\n        this.element.querySelector(\"h2\").textContent = `${this.type.toUpperCase()}-PROJECT`;\n    }\n}\nexports[\"default\"] = ProjectList;\n__decorate([\n    autobind_1.default\n], ProjectList.prototype, \"dragLeaveHandler\", null);\n__decorate([\n    autobind_1.default\n], ProjectList.prototype, \"dragOverHandler\", null);\n__decorate([\n    autobind_1.default\n], ProjectList.prototype, \"dropHandler\", null);\n\n\n//# sourceURL=webpack://understanding-typescript/./src/components/project-list.ts?");

/***/ }),

/***/ "./src/decorators/autobind.ts":
/*!************************************!*\
  !*** ./src/decorators/autobind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction Autobind(_, _2, description) {\n    const originalFn = description.value;\n    const adjDescription = {\n        configurable: true,\n        enumerable: false,\n        get() {\n            return originalFn.bind(this);\n        },\n    };\n    return adjDescription;\n}\nexports[\"default\"] = Autobind;\n\n\n//# sourceURL=webpack://understanding-typescript/./src/decorators/autobind.ts?");

/***/ }),

/***/ "./src/models/project.ts":
/*!*******************************!*\
  !*** ./src/models/project.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.projectStatus = void 0;\nvar projectStatus;\n(function (projectStatus) {\n    projectStatus[projectStatus[\"active\"] = 0] = \"active\";\n    projectStatus[projectStatus[\"finished\"] = 1] = \"finished\";\n})(projectStatus || (exports.projectStatus = projectStatus = {}));\n\n\n//# sourceURL=webpack://understanding-typescript/./src/models/project.ts?");

/***/ }),

/***/ "./src/state/project-state.ts":
/*!************************************!*\
  !*** ./src/state/project-state.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst project_1 = __webpack_require__(/*! ../models/project */ \"./src/models/project.ts\");\nclass State {\n    constructor() {\n        this.listenFn = [];\n    }\n    addListener(fn) {\n        this.listenFn.push(fn);\n    }\n}\nclass ProjectState extends State {\n    constructor() {\n        super();\n        this.projects = [];\n    }\n    static getInstance() {\n        if (this.instance) {\n            return this.instance;\n        }\n        this.instance = new ProjectState();\n        return this.instance;\n    }\n    addProject(title, description, numOfPeople, status) {\n        this.projects.push({\n            id: Math.random().toString(),\n            title,\n            description,\n            people: numOfPeople,\n            status: status === \"active\" ? 0 : 1,\n        });\n        this.updateListenFn();\n    }\n    moveProject(id, type) {\n        const project = this.projects.find((prj) => prj.id === id);\n        if (project && type !== project_1.projectStatus[project.status]) {\n            project.status = project.status === 0 ? 1 : 0;\n            this.updateListenFn();\n        }\n    }\n    updateListenFn() {\n        for (const listener of this.listenFn) {\n            listener(this.projects.slice());\n        }\n    }\n}\nexports[\"default\"] = ProjectState.getInstance();\n\n\n//# sourceURL=webpack://understanding-typescript/./src/state/project-state.ts?");

/***/ }),

/***/ "./src/util/validation.ts":
/*!********************************!*\
  !*** ./src/util/validation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validate = void 0;\nfunction validate(validationInput) {\n    let isValid = true;\n    if (validationInput.required) {\n        isValid = isValid && validationInput.value.toString().trim().length !== 0;\n    }\n    if (validationInput.minLength) {\n        isValid =\n            isValid &&\n                validationInput.value.toString().trim().length >=\n                    validationInput.minLength;\n    }\n    if (validationInput.maxLength && typeof validationInput.value === \"string\") {\n        isValid =\n            isValid &&\n                validationInput.value.trim().length <= validationInput.maxLength;\n    }\n    if (validationInput.minLength && typeof validationInput.value === \"string\") {\n        isValid =\n            isValid &&\n                validationInput.value.trim().length <= validationInput.minLength;\n    }\n    if (validationInput.min && typeof validationInput.value === \"number\") {\n        isValid = isValid && validationInput.value <= validationInput.min;\n    }\n    if (validationInput.max && typeof validationInput.value === \"number\") {\n        isValid = isValid && validationInput.value > validationInput.max;\n    }\n    return isValid;\n}\nexports.validate = validate;\n\n\n//# sourceURL=webpack://understanding-typescript/./src/util/validation.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;