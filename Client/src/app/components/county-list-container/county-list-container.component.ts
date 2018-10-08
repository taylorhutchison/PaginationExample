import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import * as fromApp from '../../app.reducer';
import * as fromCounty from '../../state/county/county.reducer';
import * as countyActions from '../../state/county/county.actions';
import { Store, select } from '@ngrx/store';
import { CountyQueryResult } from '../../interfaces/countyQueryResult';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-county-list-container',
  templateUrl: './county-list-container.component.html',
  styleUrls: ['./county-list-container.component.css']
})
export class CountyListContainerComponent implements OnInit {
  private ngUnsubscribe: Subject<any> = new Subject();

  countyResults: CountyQueryResult;

  constructor(private store: Store<fromApp.AppState>) { }

  page(pageEvent: {pageIndex: number, pageSize: number}) {
    this.store.dispatch(new countyActions.LoadCounties({
      pageIndex: pageEvent.pageIndex,
      pageSize: pageEvent.pageSize
    }));
  }

  ngOnInit() {

    this.page({pageIndex: 0, pageSize: 10});

    this.store.pipe(
      select(fromCounty.countyResults),
      takeUntil(this.ngUnsubscribe)
    ).subscribe((result: CountyQueryResult) => {
      this.countyResults = result;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
