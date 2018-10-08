import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { CountyListComponent } from './components/county-list/county-list.component';
import { CountyListContainerComponent } from './components/county-list-container/county-list-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './app.reducer';
import { CountyEffects } from './state/county/county.effects';

@NgModule({
  declarations: [
    AppComponent,
    CountyListComponent,
    CountyListContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CountyEffects])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
