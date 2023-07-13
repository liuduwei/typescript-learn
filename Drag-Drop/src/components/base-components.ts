export default abstract class Component<
  T extends HTMLElement,
  U extends HTMLElement
> {
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
