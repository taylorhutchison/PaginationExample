import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { County } from '../../interfaces/county';
import { CountyActions, CountyActionTypes } from './county.actions';
import { CountyQueryResult } from '../../interfaces/countyQueryResult';

export interface CountyState {
    counties: County[];
    totalRecordCount: number;
    pageIndex: number;
    pageSize: number;
    error: string | null;
}

const initialState: CountyState = {
    counties: [],
    totalRecordCount: 0,
    pageIndex: 0,
    pageSize: 10,
    error: null
}

export function countyReducer(state: CountyState = initialState, action: CountyActions) {
  switch (action.type) {
    case CountyActionTypes.LoadCountiesSuccess:
        return {
            ...state,
            counties: action.payload.counties,
            totalRecordCount: action.payload.totalRecordCount
        };
    case CountyActionTypes.LoadCountiesFail:
        return {
            ...state,
            counties: [],
            totalRecordCount: 0,
            error: action.payload
        }
    default:
      return state;
  }
}

const getCountyState = createFeatureSelector<CountyState>('county')

export const countyResults = createSelector(
  getCountyState,
  state => {
    return {
      'counties': state.counties,
      'totalRecordCount': state.totalRecordCount
    } as CountyQueryResult;
  }
);

export const countyError = createSelector(
    getCountyState,
    state => state.error
)
