import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from '../todo/model/todo.model';
import * as fromFilterActions from '../filter/filter.actions';


@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: fromFilterActions.fliterValues): Todo[] {
    console.log(todos);
    console.log(filter);
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
        case 'slopes':
          return  todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }

}
