import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyListContainerComponent } from './county-list-container.component';

describe('CountyListContainerComponent', () => {
  let component: CountyListContainerComponent;
  let fixture: ComponentFixture<CountyListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountyListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
