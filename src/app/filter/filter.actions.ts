import {Action} from '@ngrx/store';

export const SET_FILTER = '[FILTER] SET FILTER';
export type fliterValues =  'all' | 'completeds' | 'slopes';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(public filter: fliterValues) {
  }
}


export type Actions =  SetFilterAction;
