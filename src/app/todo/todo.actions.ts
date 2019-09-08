import {Action} from '@ngrx/store';

export const AGGREGATE_TODO = '[TODO] AGGREGATE TODO';

export class AggregateTodoAction implements Action {
  readonly type = AGGREGATE_TODO;

  constructor(public text: string) {}
}
 export type Actions = AggregateTodoAction;
