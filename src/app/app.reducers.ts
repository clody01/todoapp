import {Todo} from './todo/model/todo.model';
import {ActionReducerMap} from '@ngrx/store';


import * as fromTodoReducer from './todo/toto.reducer';
import * as fromFilterReducer from './filter/filter.reducer';
import * as fromFilterActions from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filter: fromFilterActions.fliterValues;
}

export const AppReducers: ActionReducerMap<AppState> = {
  todos: fromTodoReducer.todoReducer,
  filter: fromFilterReducer.filterReducer
};
