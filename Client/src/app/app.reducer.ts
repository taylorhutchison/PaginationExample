import { ActionReducerMap } from '@ngrx/store';
import { countyReducer, CountyState } from './state/county/county.reducer';

export interface AppState {
    county: CountyState;
}

export interface IAction {
    type: any;
    payload: any;
}

export const reducers: ActionReducerMap<AppState, IAction> = {
    county: countyReducer
};