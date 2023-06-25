"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "liud",
    age: 30,
    hobbies: ["swimming", "backetball"],
    role: 2,
};
let favoriteActivities;
favoriteActivities = ["bass", "norris"];
function add(n1, n2) {
    return n1 + n2;
}
const number1 = 5;
const number2 = 1;
const result = add(number1, number2);
console.log(result);
//# sourceMappingURL=basic-types.js.map