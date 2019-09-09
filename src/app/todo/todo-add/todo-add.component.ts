import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AppState} from '../../app.reducers';
import {Store} from '@ngrx/store';


import * as fromActions from '../todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  aggregateTodo() {
    if (this.txtInput.invalid) {
      return;
    }
    const action = new fromActions.AggregateTodoAction(this.txtInput.value);
    this.store.dispatch(action);
    this.txtInput.setValue('');
  }
}
