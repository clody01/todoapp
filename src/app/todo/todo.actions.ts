import {Action} from '@ngrx/store';

export const AGGREGATE_TODO = '[TODO] AGGREGATE TODO';
export const TOGGLE_TODO = '[TODO] TOGGLE TODO';
export const EDIT_TODO = '[TODO] EDIT TODO';
export const DELETE_TODO = '[TODO] DELETE TODO';

export class AggregateTodoAction implements Action {
  readonly type = AGGREGATE_TODO;

  constructor(public text: string) {
  }
}
export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {
  }
}

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;

  constructor(public id: number, public text: string) {
  }
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(public id: number) {
  }
}

export type Actions = AggregateTodoAction | ToggleTodoAction | EditTodoAction | DeleteTodoAction;
