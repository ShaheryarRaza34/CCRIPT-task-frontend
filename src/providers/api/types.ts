//CREATE
export type AddProps = {
  task: string;
};

export type AddResponse = {
  message: string;
};

//READ
export type Item = {
  id: number;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type ListResponse = {
  tasks: Item[];
};

//UPDATE

export type UpdateProps = {
  id: number;
  task: string;
};

export type UpdateResponse = {
  message: string;
};

//DELETE

export type DeleteProps = {
  id: number;
};

export type DeleteResponse = {
  message: string;
};
