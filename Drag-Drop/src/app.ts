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

  if (validationInput.minLength && typeof validationInput.value === "string") {
    isValid =
      isValid &&
      validationInput.value.trim().length <= validationInput.minLength;
  }

  if (validationInput.min && typeof validationInput.value === "number") {
    isValid = isValid && validationInput.value <= validationInput.min;
  }

  if (validationInput.max && typeof validationInput.value === "number") {
    isValid = isValid && validationInput.value > validationInput.max;
  }

  return isValid;
}

enum projectStatus {
  active,
  finished,
}
interface ProjectDescriptor {
  id: string;
  title: string;
  description: string;
  people: number;
  status: projectStatus;
}

interface ProjectStateListener<T> {
  (projects: T[]): void;
}

class State<T> {
  protected listenFn: ProjectStateListener<T>[] = [];

  public addListener(fn: ProjectStateListener<T>) {
    this.listenFn.push(fn);
  }
}

interface Dragable {
  dragStartHandler(e: DragEvent): void;
  dragEndHandler(e: DragEvent): void;
}

interface DragTarget {
  dragLeaveHandler(e: DragEvent): void;
  dragOverHandler(e: DragEvent): void;
  dropHandler(e: DragEvent): void;
}

interface Dropable {
  dropHandler(e: DragEvent): void;
}

// type Projec

class ProjectState extends State<ProjectDescriptor> {
  private projects: ProjectDescriptor[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }
  static getInstance(): ProjectState {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  public addProject(
    title: string,
    description: string,
    numOfPeople: number,
    status: "active" | "finished"
  ): void {
    this.projects.push({
      id: Math.random().toString(),
      title,
      description,
      people: numOfPeople,
      status: status === "active" ? 0 : 1,
    });
    this.updateListenFn();
  }

  public moveProject(id: string, type: "active" | "finished") {
    const project = this.projects.find((prj) => prj.id === id);
    if (project && type !== projectStatus[project.status]) {
      project.status = project.status === 0 ? 1 : 0;
      this.updateListenFn();
    }
  }

  private updateListenFn() {
    for (const listener of this.listenFn) {
      listener(this.projects.slice());
    }
  }
}

const projectState = <ProjectState>ProjectState.getInstance();

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  protected templete: HTMLTemplateElement;
  private hostElement: T;
  protected element: U;

  constructor(
    templeteId: string,
    hostId: string,
    insertAtBeginning: boolean,
    elementId?: string
  ) {
    this.templete = <HTMLTemplateElement>document.getElementById(templeteId);
    this.hostElement = <T>document.getElementById(hostId);

    const importNode = document.importNode(this.templete.content, true);
    this.element = <U>importNode.firstElementChild;
    if (elementId) {
      this.element.id = elementId;
    }

    this.attach(insertAtBeginning);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}

class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Dragable
{
  private project: ProjectDescriptor;
  constructor(project: ProjectDescriptor, type: "active" | "finished") {
    super("single-project", `${type}-projects-list`, false, project.id);
    this.project = project;
    this.configure();
    this.renderContent();
  }
  @Autobind
  dragStartHandler(e: DragEvent): void {
    e.dataTransfer!.setData("text/plain", this.project.id);
    e.dataTransfer!.effectAllowed = "move";
    // console.log("dragStartHandler", e);
  }
  @Autobind
  dragEndHandler(_: DragEvent): void {
    // console.log("dragEndHandler", e);
  }

  get person() {
    return this.project.people === 1
      ? "1 person assigned"
      : `${this.project.people} persons assigned`;
  }

  configure(): void {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }
  renderContent(): void {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.person;
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}

class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  private type: "active" | "finished";
  private assignedProjects: ProjectDescriptor[] = [];
  constructor(type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.type = type;

    this.configure();
    this.renderContent();
  }
  @Autobind
  dragLeaveHandler(_: DragEvent): void {
    this.element.querySelector("ul")!.classList.remove("droppable");
    // console.log(_);
  }
  @Autobind
  dragOverHandler(e: DragEvent): void {
    if (e.dataTransfer && e.dataTransfer.types[0] === "text/plain") {
      e.preventDefault();
      this.element.querySelector("ul")!.classList.add("droppable");
    }
  }
  @Autobind
  dropHandler(e: DragEvent): void {
    const id = e.dataTransfer!.getData("text/plain");
    this.element.querySelector("ul")!.classList.remove("droppable");
    projectState.moveProject(
      id,
      this.type === "active" ? "active" : "finished"
    );
  }

  private renderProjects() {
    const listEL = <HTMLUListElement>(
      document.querySelector(`#${this.type}-projects-list`)
    );
    listEL.innerHTML = "";
    for (const project of this.assignedProjects) {
      new ProjectItem(project, this.type);
    }
  }

  configure(): void {
    // this.element.addEventListener("dragenter", this.dragEnterHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("drop", this.dropHandler);
    projectState.addListener((projects: ProjectDescriptor[]) => {
      this.assignedProjects = projects.filter(
        (prj) => projectStatus[prj.status] === this.type
      );
      this.renderProjects();
    });
  }

  renderContent(): void {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector(
      "h2"
    )!.textContent = `${this.type.toUpperCase()}-PROJECT`;
  }
}

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  private titleInput: HTMLInputElement;
  private descriptionInput: HTMLInputElement;
  private peopleInput: HTMLInputElement;

  constructor() {
    super("project-input", "app", false, "user-input");
    this.titleInput = <HTMLInputElement>this.element.querySelector("#title");
    this.descriptionInput = <HTMLInputElement>(
      this.element.querySelector("#description")
    );
    this.peopleInput = <HTMLInputElement>this.element.querySelector("#people");
    this.configure();
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
      projectState.addProject(title, desc, people, "active");
      this.clearInput();
    }
  }

  private clearInput() {
    this.titleInput.value = "";
    this.descriptionInput.value = "";
    this.peopleInput.value = "";
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent(): void {}
}

const input = new ProjectInput();
const activeProject = new ProjectList("active");
const finishedProject = new ProjectList("finished");
