"use strict";
function iAm(person) {
    if ("school" in person) {
        console.log(person.school);
    }
    if ("age" in person) {
        console.log(person.age);
    }
}
var liuduwei = {
    school: "uestc",
    age: 22,
};
iAm(liuduwei);
//# sourceMappingURL=app.js.map