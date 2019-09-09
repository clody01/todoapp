import * as fromTodo from './todo.actions';
import {Todo} from './model/todo.model';
import {EDIT_TODO} from './todo.actions';
import {DELETE_TODO} from './todo.actions';
import {TOGGLE_ALL_TODO} from './todo.actions';

const initialState: Todo[] = [];

export function todoReducer(state = initialState, action: fromTodo.Actions): Todo[] {
  switch (action.type) {
    case fromTodo.AGGREGATE_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      return state.map(editedTodo => {
        if (editedTodo.id === action.id) {
          return {
            ...editedTodo,
            completed: !editedTodo.completed
          };
        } else {
          return editedTodo;
        }
      });

    case fromTodo.EDIT_TODO:
      return state.map(editedTodo => {
        if (editedTodo.id === action.id) {
          return {
            ...editedTodo,
            text: action.text
          };
        } else {
          return editedTodo;
        }
      });
    case fromTodo.DELETE_TODO:
      return state.filter(editedTodo => editedTodo.id !== action.id);
    case fromTodo.DELETE_ALL_TODO:
       return state.filter(editedTodo => !editedTodo.completed);

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(editedTodo => {
        return {
          ...editedTodo,
          completed: action.completed
        };
      });


    default:
      return state;
  }

}
