import {Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import {Todo} from '../model/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {AppState} from '../../app.reducers';
import {Store} from '@ngrx/store';
import {ToggleTodoAction} from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtInputPhysic', {static: true}) txtInputPhysic: ElementRef;
  chkfield: FormControl;
  txtInput: FormControl;
  edit: boolean;

  constructor(private  store: Store<AppState>) {
  }

  ngOnInit() {
    this.chkfield = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkfield.valueChanges.subscribe(value => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
      console.log(value);
    });
  }

  editing() {
    this.edit = true;
    setTimeout(() => {
      this.txtInputPhysic.nativeElement.select();
    }, 1);
  }

  editEnded() {
    this.edit = false;
  }

}
