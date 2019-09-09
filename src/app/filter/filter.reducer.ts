import * as fromFilterAction from './filter.actions';
import {AppState} from '../app.reducers';
import {Store} from '@ngrx/store';

const initialState: fromFilterAction.fliterValues = 'all';

export function filterReducer(state = initialState, action: fromFilterAction.Actions): fromFilterAction.fliterValues {
  switch (action.type) {
    case fromFilterAction.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
