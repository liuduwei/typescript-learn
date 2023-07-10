export enum projectStatus {
  active,
  finished,
}

export interface ProjectDescriptor {
  id: string;
  title: string;
  description: string;
  people: number;
  status: projectStatus;
}

export interface ProjectStateListener<T> {
  (projects: T[]): void;
}
