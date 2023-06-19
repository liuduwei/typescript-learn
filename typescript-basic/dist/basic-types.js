"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "liud",
    age: 30,
    hobbies: ["swimming", "backetball"],
    role: 2,
};
var favoriteActivities;
favoriteActivities = ["bass", "norris"];
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 1;
var result = add(number1, number2);
console.log(result);
//# sourceMappingURL=basic-types.js.map