import Autobind from "../decorators/autobind";
import { DragTarget } from "../models/darg-drop";
import { ProjectDescriptor, projectStatus } from "../models/project";
import projectState from "../state/project-state";
import Component from "./base-components";
import ProjectItem from "./project-item";

export default class ProjectList
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
