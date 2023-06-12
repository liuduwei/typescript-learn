enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person: {
  name: string;
  age: 30;
  hobbies: string[];
  role: Role.ADMIN;
  // role: [number, string];
} = {
  name: "liud",
  age: 30,
  hobbies: ["swimming", "backetball"],
  // role: [2, "admin"],
}; //object
let favoriteActivities: string[];
favoriteActivities = ["bass", "norris"];

// console.log(person.nickname);

function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 1;

const result = add(number1, number2);
console.log(result);
