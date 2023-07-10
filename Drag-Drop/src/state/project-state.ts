import { ProjectStateListener,ProjectDescriptor } from "../models/project";
import { projectStatus } from "../models/project";

class State<T> {
  protected listenFn: ProjectStateListener<T>[] = [];

  public addListener(fn: ProjectStateListener<T>) {
    this.listenFn.push(fn);
  }
}

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

export default const projectState = <ProjectState>ProjectState.getInstance();
