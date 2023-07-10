import Autobind from "../decorators/autobind";
import { ProjectDescriptor } from "../models/project";

export default class ProjectItem
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
