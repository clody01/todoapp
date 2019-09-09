import {Component, OnInit} from '@angular/core';
import * as fromFilterActions from '../../filter/filter.actions';
import * as fromTodoActions from '../todo.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import * as fromActions from '../todo.actions';
import {Todo} from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  slopes: number;
  filterValues: fromFilterActions.fliterValues[] = ['all', 'completed', 'slopes'];
  selectedFilter: fromFilterActions.fliterValues;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.slopesCounter(state.todos);
      this.selectedFilter = state.filter;
    });
  }

  changerFilter(filter: fromFilterActions.fliterValues) {
    const action = new fromFilterActions.SetFilterAction(filter);
    this.store.dispatch(action);
  }

  slopesCounter(todos: Todo[]) {
    this.slopes = todos.filter(todo => !todo.completed).length;
  }

  deleteAllCompleted() {
    const action = new fromTodoActions.DeleteAllTodoAction();
    this.store.dispatch(action);
  }
}
