import {Component, OnInit} from '@angular/core';
import * as fromFilterActions from '../../filter/filter.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import * as fromActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filterValues: fromFilterActions.fliterValues[] = ['all', 'completed', 'slopes'];
  selectedFilter: fromFilterActions.fliterValues;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.selectedFilter = state.filter;
    });
  }

  changerFilter(filter: fromFilterActions.fliterValues) {
    const action = new fromFilterActions.SetFilterAction(filter);
    this.store.dispatch(action);
  }
}
