import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as appActions from './county.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CountyService } from '../../services/county.service';
import { CountyQueryResult } from '../../interfaces/countyQueryResult';

@Injectable()
export class CountyEffects {

    constructor(private actions$: Actions,
        private countyService: CountyService) { }


    @Effect()
    loadConfig$ = this.actions$.pipe(
        ofType(appActions.CountyActionTypes.LoadCounties),
        mergeMap((action: { payload: appActions.LoadCountiesPageData }) => {
            return this.countyService.getCounties(action.payload.pageIndex, action.payload.pageSize).pipe(
                map((result: CountyQueryResult) => new appActions.LoadCountiesSuccess(result)),
                catchError(err => of(new appActions.LoadCountiesFail(err)))
            );
        })
    );

}
