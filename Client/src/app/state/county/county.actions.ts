import { Action } from '@ngrx/store';
import { CountyQueryResult } from '../../interfaces/countyQueryResult';

export interface LoadCountiesPageData {
    pageIndex: number;
    pageSize: number;
}

export enum CountyActionTypes {
    LoadCounties = '[County] Load Counties',
    LoadCountiesSuccess = '[Count] Load Counties Success',
    LoadCountiesFail = '[County] Load Counties Fail'
}

export class LoadCounties implements Action {
    readonly type = CountyActionTypes.LoadCounties;
    constructor(public payload: LoadCountiesPageData) {}
}

export class LoadCountiesSuccess implements Action {
    readonly type = CountyActionTypes.LoadCountiesSuccess
    constructor(public payload: CountyQueryResult) {}
}

export class LoadCountiesFail implements Action {
    readonly type = CountyActionTypes.LoadCountiesFail;
    constructor(public payload: string) {}
}

export type CountyActions =
LoadCounties |
LoadCountiesSuccess |
LoadCountiesFail;