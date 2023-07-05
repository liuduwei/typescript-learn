// Code goes here!
// Autobind
function Autobind(_: any, _2: string, description: PropertyDescriptor) {
  const originalFn = description.value;
  const adjDescription: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      return originalFn.bind(this);
    },
  };
  return adjDescription; //return void or adjDescription
}

// validation
interface ValidationAble {
  value: number | string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validationInput: ValidationAble): boolean | string {
  let isValid = true;
  if (validationInput.required) {
    isValid = isValid && validationInput.value.toString().trim().length !== 0;
  }
  if (validationInput.minLength) {
    isValid =
      isValid &&
      validationInput.value.toString().trim().length >=
        validationInput.minLength;
  }

  if (validationInput.maxLength && typeof validationInput.value === "string") {
    isValid =
      isValid &&
      validationInput.value.trim().length <= validationInput.maxLength;
  }

  if (validationInput.min && typeof validationInput.value === "string") {
    isValid =
      isValid && validationInput.value.trim().length <= validationInput.min;
  }

  if (validationInput.min && typeof validationInput.value === "number") {
    isValid = isValid && validationInput.value >= validationInput.min;
  }

  if (validationInput.min && typeof validationInput.value === "number") {
    isValid = isValid && validationInput.value <= validationInput.min;
  }

  return isValid;
}

interface ProjectDescriptor {
  id: string;
  title: string;
  description: string;
  people: number;
}

interface ProjectStateListener {
  (projects: ProjectDescriptor[]): void;
}

// type Projec

class ProjectState {
  private projects: ProjectDescriptor[] = [];
  private static instance: ProjectState;
  private listenFn: ProjectStateListener[] = [];

  private constructor() {}
  static getInstance(): ProjectState {
    if (ProjectState.instance) {
      return this.instance;
    }
    ProjectState.instance = new ProjectState();
    return this.instance;
  }

  public addProject(
    title: string,
    description: string,
    numOfPeople: number
  ): void {
    this.projects.push({
      id: Math.random().toString(),
      title,
      description,
      people: numOfPeople,
    });

    for (const listener of this.listenFn) {
      listener(this.projects.slice());
    }
  }

  public addListener(fn: ProjectStateListener) {
    this.listenFn.push(fn);
  }
}

const projectState = <ProjectState>ProjectState.getInstance();

class ProjectList {
  private templete: HTMLTemplateElement;
  private hostElement: HTMLDivElement;
  private element: HTMLFormElement;
  private type: string;
  constructor(type: "active" | "finished") {
    this.type = type;
    this.templete = <HTMLTemplateElement>(
      document.getElementById("project-list")
    );
    this.hostElement = <HTMLDivElement>document.getElementById("app");

    const importNode = document.importNode(this.templete.content, true);
    this.element = <HTMLFormElement>importNode.firstElementChild;
    this.element.id = `${type}-projects`;

    projectState.addListener((projects: ProjectDescriptor[]) => {
      const listEL = <HTMLUListElement>(
        document.querySelector(`#${this.type}-projects-list`)
        // active-projects-list
      );
      console.log(listEL);
      for (const project of projects) {
        const liItem = document.createElement("li");
        liItem.textContent = project.title;
        listEL.appendChild(liItem);
      }
    });
    this.renderContent();
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }

  private renderContent(): void {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector(
      "h2"
    )!.textContent = `${this.type.toUpperCase()}-PROJECT`;
  }
}

class ProjectInput {
  private templete: HTMLTemplateElement;
  private hostElement: HTMLDivElement;
  private element: HTMLFormElement;
  private titleInput: HTMLInputElement;
  private descriptionInput: HTMLInputElement;
  private peopleInput: HTMLInputElement;

  constructor() {
    this.templete = <HTMLTemplateElement>(
      document.getElementById("project-input")
    );
    this.hostElement = <HTMLDivElement>document.getElementById("app");

    const importNode = document.importNode(this.templete.content, true);
    this.element = <HTMLFormElement>importNode.firstElementChild;
    this.element.id = "user-input";
    this.titleInput = <HTMLInputElement>this.element.querySelector("#title");
    this.descriptionInput = <HTMLInputElement>(
      this.element.querySelector("#description")
    );
    this.peopleInput = <HTMLInputElement>this.element.querySelector("#people");
    this.configure();
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  private gatherUserInput(): [string, string, number] | void {
    const enterTitle = this.titleInput.value;
    const enterDescription = this.descriptionInput.value;
    const enterPeople = this.peopleInput.value;

    if (
      validate({ value: enterTitle, required: true, minLength: 3 }) ||
      validate({ value: enterDescription, required: true, minLength: 3 }) ||
      validate({ value: enterPeople, required: true, min: 8 })
    ) {
      return [enterTitle, enterDescription, +enterPeople];
    } else {
      alert("input valid please try again");
      return;
    }
  }

  @Autobind
  private submitHandler(e: SubmitEvent) {
    e.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      projectState.addProject(title, desc, people);
      console.log(projectState);
      this.clearInput();
    }
  }

  private clearInput() {
    this.titleInput.value = "";
    this.descriptionInput.value = "";
    this.peopleInput.value = "";
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }
}

const input = new ProjectInput();
const activeProject = new ProjectList("active");
const finishedProject = new ProjectList("finished");
