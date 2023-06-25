function Logger(info: string): Function {
  console.log(info);
  return function Logger1(constructor: Function) {
    console.log(constructor);
  };
}

// property decorator
function LogProperty(target: any, propertyName: string | symbol) {
  console.log("target", target);
  console.log("prop", propertyName);
}

// access decorator, method decorator
function LogFunction(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("target", target);
  console.log("prop", name);
  console.log("des", descriptor);
}

// paramater decorator
function LogParameter(target: any, name: string, position: number) {
  console.log(target);
  console.log(name);
  console.log(position);
}

// more useful decorator
function AddTemplate(template: string, selector: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any) {
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

//decorator with class
// @Logger("dfe")
@AddTemplate("caonima", "h1")
class Personn {
  @LogProperty //before property
  public name = "max";
  @LogProperty
  public name2 = "max";
  public name3 = "max";

  @LogFunction
  set setName(@LogParameter name: string) {
    this.name = name;
  }
  constructor() {
    // console.log("constructor");
  }
}

// autobind

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
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
  public message = "caonima";
  constructor() {}
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const btn = document.querySelector("button");
btn?.addEventListener("click", p.showMessage);

class Course {
  constructor(public name: any, public price: any) {
    this.name = name;
    this.price = price;
  }
}

const formEl = document.querySelector("form");
formEl?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const name = formData.get("name");
  const price = formData.get("price");

  const createCourse = new Course(name, price);
  console.log(createCourse);
});
