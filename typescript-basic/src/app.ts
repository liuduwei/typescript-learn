abstract class Living {
  constructor(private is_live: boolean, protected Species: string) {}

  fn(): number {
    return 1;
  }

  abstract fn2(): string;
}
class Person extends Living {
  static profile: string;
  private static instance: Person;

  private _gender: string;

  public get gender(): string {
    return this._gender;
  }
  public set gender(value: string) {
    this._gender = value;
  }
  public age: number;

  private constructor(
    private readonly name: string,
    age: number,
    gender: string
  ) {
    Person.profile = "dfe";
    super(true, "people");
    this.age = age;
    this._gender = gender;
    // this.age = age;
  }

  static getInstance(name: string, age: number, gender: string): Person {
    if (this.instance) {
      return Person.instance;
    }
    Person.instance = new Person(name, age, gender);
    return Person.instance;
  }

  fn2() {
    return "cao";
  }

  get getGender() {
    if (this.gender) {
      return this.gender;
    }
  }

  changeName(name: string) {
    // this.name = name;
  }
}

const liu = Person.getInstance("liuduwei", 21, "male");
const tong = Person.getInstance("tongqing", 22, "female");

console.log(liu);
console.log(tong);

// const liuduwei = new Person("liuduwei", 12);

// console.log(liuduwei);
