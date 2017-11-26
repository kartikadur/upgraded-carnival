export const ADD_TODOS = "[Todo] Add Todo";
export const REMOVE_TODOS = "[Todo] Remove Todo";

export class AddTodo {
  readonly type = ADD_TODOS;

  constructor(private payload: any) {}
}

export class RemoveTodo {
  readonly type = REMOVE_TODOS;

  constructor(private payload: any) {}
}
