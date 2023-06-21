interface Student {
  type: "Student";
  school: string;
}

interface Teenagers {
  type: "Teenagers";
  age: number;
}

type Teenagers_student = Student & Teenagers;

// function iAm(person: Teenagers_student): void {
//   if ("school" in person) {
//     console.log(person.school);
//   }
//   if ("age" in person) {
//     console.log(person.age);
//   }
// }

// const liuduwei: Teenagers_student = {
//   school: "uestc",
//   age: 22,
// };

// iAm(liuduwei);

type people = Student | Teenagers;

function iAm2(person: people) {
  switch (person.type) {
    case "Student":
      console.log("im a student");
    case "Teenagers":
      console.log("im a teenagers");
  }
}

const tongtong: people = {
  type: "Teenagers",
  age: 2,
};

iAm2(tongtong);

// const input = <HTMLInputElement>document.getElementById("input");
const h1 = document.querySelector("h1");
console.log(h1);
const input = document.getElementById("input") as HTMLInputElement;
console.log(input);
const value = input.value;
console.log(value);

interface Card {
  [prop: string]: number;
}

const c: Card = {
  id: 2,
};

// optional chainning
// NUllish coalecing
