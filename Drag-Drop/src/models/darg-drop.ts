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
