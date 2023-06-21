// build in generc types
const strArray: string[] = ["1"];
const strArray2: Array<string> = ["12"];

const promise: Promise<string> = new Promise((reslove) => {
  setTimeout(() => reslove("100"), 100);
});

promise.then((data) => {
  data.split("");
});

// generic function

function merge12<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const A = merge12({ name: "123" }, { age: 3 });
A.age;

// generic constraint
interface lengthy {
  length: number;
}

function countLetter<T extends lengthy>(element: T) {
  console.log(element);
}

// keyof restrict

function extractValue<T extends object, U extends keyof T>(obj1: T, key: U) {
  return obj1[key];
}

extractValue({ name: "dfe" }, "name");

// generic class

class repo<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const objectRepo = new repo<Object>();
objectRepo.addItem({ name: "tongtong" });
objectRepo.addItem({ name: "liuduwei" });

objectRepo.removeItem({ name: "tongtong" });
console.log(objectRepo);

const stringRepo = new repo<string>();
stringRepo.addItem("2");
stringRepo.addItem("是");

console.log(stringRepo);

// generics utility

interface courseGoal {
  title: string;
  description: string;
}

function createCourseGoal(title: string, description: string): courseGoal {
  const courseGoal: Partial<courseGoal> = {}; // is both the same thing ??
  courseGoal.title = title;
  courseGoal.description = description;
  return courseGoal as courseGoal;
}
