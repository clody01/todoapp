import * as fromTodo from './todo.actions';
import {Todo} from './model/todo.model';

const initialState: Todo[] = [];

export function todoreducer(state, action: fromTodo.Actions): Todo[] {
  switch (action.type) {

    case fromTodo.AGGREGATE_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];
    default:
      return state;
  }

}
