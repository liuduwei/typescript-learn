import Autobind from "../decorators/autobind";
import projectState from "../state/project-state";
import { validate } from "../util/validation";
import Component from "./base-components";

export default class ProjectInput extends Component<
  HTMLDivElement,
  HTMLFormElement
> {
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
