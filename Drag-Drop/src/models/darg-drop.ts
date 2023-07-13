export interface Dragable {
  dragStartHandler(e: DragEvent): void;
  dragEndHandler(e: DragEvent): void;
}

export interface DragTarget {
  dragLeaveHandler(e: DragEvent): void;
  dragOverHandler(e: DragEvent): void;
  dropHandler(e: DragEvent): void;
}

export interface Dropable {
  dropHandler(e: DragEvent): void;
}
