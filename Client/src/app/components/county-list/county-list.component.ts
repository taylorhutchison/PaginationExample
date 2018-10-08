import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CountyQueryResult } from '../../interfaces/countyQueryResult';


@Component({
  selector: 'app-county-list',
  templateUrl: './county-list.component.html',
  styleUrls: ['./county-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountyListComponent implements OnInit {

  @Input()
  countyResults: CountyQueryResult;

  @Output()
  pageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  columnsToDisplay = ['name', 'area', 'population'];

  page(event) {
    this.pageEvent.emit(event);
  }

  constructor() { }

  ngOnInit() {}

}
