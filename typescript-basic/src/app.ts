interface Student {
  school: string;
}

interface Teenagers {
  age: number;
}

type Teenagers_student = Student & Teenagers;

function iAm(person: Teenagers_student): void {
  if ("school" in person) {
    console.log(person.school);
  }
  if ("age" in person) {
    console.log(person.age);
  }
}

const liuduwei: Teenagers_student = {
  school: "uestc",
  age: 22,
};

iAm(liuduwei);
